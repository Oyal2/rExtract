import { Flex } from "./items/flex";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { Title } from "./items/title";
import { TextBox } from "./items/textbox";
import { Pallete } from "./items/styling";

export const HOST_URL = "https://oyal2.com";

function DesktopLayout() {
  return (
    <>
      <Flex>
        <Flex width="100%" height="15%" padding="16px">
          <ReactLogo height={150} width={150} />
        </Flex>
        <Flex margin="32px">
          <Flex
            marginLeft="auto"
            marginRight="auto"
            width="50%"
            marginBottom="2%"
          >
            <Title
              textAlign="center"
              text="Start Extracting and"
              color={Pallete.white}
              fontSize="48px"
            />
            <Title
              textAlign="center"
              text="Sharing Reddit"
              color={Pallete.white}
              fontSize="48px"
            />
            <Title
              textAlign="center"
              text="Videos"
              color={Pallete.white}
              fontSize="48px"
            />
            <Flex marginTop="25px">
              <Title
                textAlign="center"
                text="Download Reddit videos with sound audio"
                color={Pallete.default_text}
                fontSize="24px"
              />
            </Flex>
          </Flex>
          <Flex marginLeft="auto" marginRight="auto" width="50%">
            <TextBox
              placeholder={
                "Please enter a reddit URL e.g https://www.reddit.com/r/..."
              }
              size="large"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default DesktopLayout;
