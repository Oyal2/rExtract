var express = require("express");
const fs = require('fs')
var app = express();
const port = 3333;
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
const fileIds = new Set(fs.readdirSync(__dirname + '/videos').map(x => x.substring(0, x.indexOf('_'))))
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

app.get("/api/rExtract", async (req, res) => {
    if (req.query.url) {
        console.log("processing....")
        const videoInfo = await fetchInfo(
            req.query.url
        );
        if (videoInfo.isError) {
            res.status(400)
            res.send(videoInfo.message);
            return
        }
        if (videoInfo.message[0]?.data?.children[0]?.data?.is_reddit_media_domain) {
            const vid = videoInfo.message[0]?.data?.children[0]?.data.secure_media.reddit_video.fallback_url
            const id = videoInfo.message[0]?.data?.children[0]?.data.url.split('/').at(-1)
            if (!fileIds.has(id)) {
                const audio = 'https://v.redd.it/' + id + '/DASH_audio.mp4'
                await downloadItem(vid, __dirname + '/videos/' + id + '.mp4')
                await downloadItem(audio, __dirname + '/videos/' + id + '_audio.mp4')
                await combineClip(id, __dirname + '/videos')
                fs.unlink(`${__dirname}/videos/${id}_audio.mp4`, function (err) {
                    if (err) console.log(err)
                })
                fs.unlink(`${__dirname}/videos/${id}.mp4`, function (err) {
                    if (err) console.log(err)
                })
                fileIds.add(id)
            }
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.sendFile(`${__dirname}/videos/${id}_output.mp4`)
        }
    }
});

app.get("/api/server_status", (req, res) => {
    res.send("rExtract Server is running!");
})

app.get('/api/sped_falling', (req, res) => {
    res.sendFile(`${__dirname}/videos/SnapTik_6862452423156305158.mp4`)
})


const server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});



async function fetchInfo(url) {
    let options = {
        method: "GET",
        headers: {
            authority: "www.reddit.com",
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            cookie: "recent_srs=; ",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1",
            "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
    };
    url = url + '.json'
    let obj = {
        message: "",
        isError: false,
    };
    return await fetch(url, options)
        .then((data) => data.json())
        .then((json) => {
            obj.message = json;
            obj.isError = false;
            return obj;
        })
        .catch((err) => {
            console.log(err)
            return obj;
        });
}

async function downloadItem(url, path) {
    let options = {
        method: "GET",
        headers: {
            authority: "www.reddit.com",
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            cookie: "recent_srs=; ",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1",
            "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
    };
    let obj = {
        message: "",
        isError: false,
    };
    let resp = await fetch(url, options)
        .then((data) => data).catch((err) => {
            console.log(err)
        })

    console.log(resp)

    const download_write_stream = fs.createWriteStream(path)
    const stream = new WritableStream({
        write(chunk) {
            download_write_stream.write(chunk);
        },
    });

    await resp.body.pipeTo(stream)
    return obj
}

async function combineClip(id, path) {
    await new Promise((resolve) => {
        ffmpeg(`${path}/${id}.mp4`)
            .mergeAdd(`${path}/${id}_audio.mp4`)
            .format('mp4')
            .output(`${path}/${id}_output.mp4`)
            .on('end', function () {
                resolve(1)
            })
            .run()
    })
}