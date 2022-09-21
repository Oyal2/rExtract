import { hostname } from "os";
import React from "react";
import {
  Button,
  Dimmer,
  Input,
  InputOnChangeData,
  Loader,
} from "semantic-ui-react";
import { text } from "stream/consumers";
import { HOST_URL } from "../DekstopLayout";

interface TextBoxProps {
  placeholder: string;
  size?: "mini" | "small" | "large" | "big" | "huge" | "massive";
}

export function TextBox(props: TextBoxProps) {
  const { placeholder, size } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [textValue, setTextValue] = React.useState("");
  const [showVideo, setVideo] = React.useState("");

  const getVideo = (url: string) => {
    const options = {
      method: "GET",
      headers: {
        authority: "www.reddit.com",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
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
    try {
      const urlTest = new URL(url);
      const urlParam = urlTest.searchParams.get("url");
      if (!urlParam) throw "There is no reddit url";
      const redditUrl = new URL(urlParam);
      if (redditUrl.origin != "https://www.reddit.com")
        throw "Not a reddit url";
      if (redditUrl.pathname == "") throw "There is no reddit path";
      urlTest.search = "";
      urlTest.searchParams.set(
        "url",
        `${redditUrl.origin}${redditUrl.pathname}`
      );
      url = urlTest.toString();
    } catch (err) {
      console.error("error: " + err);
      return;
    }

    fetch(url, options)
      .then(() => {
        setVideo(url);
      })
      .catch((err) => {
        console.error("error: " + err);
      });
  };

  const inputComp = (
    <Input
      placeholder={placeholder}
      loading={isLoading}
      action={{
        color: "grey",
        content: "Extract",
        onClick: () => {
          setLoading(true);
          getVideo(`${HOST_URL}/api/rExtract?url=${textValue}`);
          setLoading(false);
        },
      }}
      size={size}
      fluid
      onChange={(
        e: React.ChangeEvent<HTMLInputElement>,
        data: InputOnChangeData
      ) => {
        setTextValue(data.value);
      }}
    />
  );
  return (
    <>
      {showVideo && (
        <video
          controls
          style={{
            maxWidth: "700px",
            maxHeight: "700px",
            marginBottom: "32px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={showVideo}
        ></video>
      )}
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted size="large" indeterminate>
            <h5>Extracting</h5>
            <Button
              content="Cancel"
              onClick={() => {
                setLoading(false);
              }}
            />
          </Loader>
        </Dimmer>
      ) : (
        inputComp
      )}
    </>
  );
}
