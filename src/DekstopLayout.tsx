import { Flex } from "./items/flex";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { Title } from "./items/title";
import { TextBox } from "./items/textbox";
import { Pallete } from "./items/styling";

export const HOST_URL = "https://oyal2.com";

function DesktopLayout() {
  return (
    <>
      <Flex width="100%" height="100vh" backgroundColor={Pallete.black}>
        <Flex width="100%" height="15%" padding="16px">
          <ReactLogo width="10%" height="auto" />
        </Flex>
        <Flex margin="32px">
          <Flex width="50vh" height="15vh">
            <Title
              text="Start Extracting and Sharing Reddit Videos"
              color={Pallete.white}
              fontSize="48px"
            />
            <Title
              text="Download Reddit videos with sound audio"
              color={Pallete.default_text}
              fontSize="24px"
            />
          </Flex>
          <Flex marginLeft="auto" marginRight="auto" width="50%">
            <TextBox
              placeholder={
                "Please enter a reddit URL e.g https://www.reddit.com/r/..."
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default DesktopLayout;
