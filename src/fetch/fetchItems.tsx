export function getVideo(url: string) {
  const options = {
    method: "GET",
    headers: {
      authority: "www.reddit.com",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      cookie:
        "session_tracker=aafkbmnhemmlcmdjhm.0.1662958714526.Z0FBQUFBQmpIcng3cXMyaFl2X2thUy1pd2JqNlRDUnRFVklCWGYzUjVrZ2hkYmlvQ0pfUmlVYTZiRjRRZmZ4OWZwUVBRVlhDYzRuYkZUYm5BWWkzX3E3WWVJVjZEdmJvOHpyeGc5cnFieWUyNE1xbUtoVTZ1eDlPbkFwdDlQVjVXblRkTUFzcEtLWmw; recent_srs=; ",
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

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}
