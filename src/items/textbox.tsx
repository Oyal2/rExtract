import React from "react";
import {
  Button,
  Dimmer,
  Input,
  InputOnChangeData,
  Loader,
} from "semantic-ui-react";
import { text } from "stream/consumers";
import { getVideo } from "../fetch/fetchItems";

interface TextBoxProps {
  placeholder: string;
}

export function TextBox(props: TextBoxProps) {
  const { placeholder } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [textValue, setTextValue] = React.useState("");
  const inputComp = (
    <Input
      placeholder={placeholder}
      loading={isLoading}
      action={{
        color: "grey",
        content: "Extract",
        onClick: () => {
          setLoading(true);
          getVideo(textValue);
        },
      }}
      size="large"
      fluid
      onChange={(
        e: React.ChangeEvent<HTMLInputElement>,
        data: InputOnChangeData
      ) => {
        setTextValue(textValue + data.value);
      }}
    />
  );
  return (
    <>
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
