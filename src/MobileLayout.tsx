import { Flex } from "./items/flex";
import { ReactComponent as ReactLogo } from "./logo.svg";
import { Title } from "./items/title";
import { TextBox } from "./items/textbox";
import { Pallete } from "./items/styling";

export const HOST_URL = "https://oyal2.com";

function MobileLayout() {
  return (
    <>
      <Flex>
        <Flex width="100%" height="100%" marginTop="20%" textAlign="center">
          <ReactLogo width={300} height={200} />
        </Flex>
        <Flex textAlign="center">
          <Title
            text="Start Extracting and Sharing Reddit"
            color={Pallete.white}
            fontSize="36px"
            textAlign="center"
          />
          <Title
            text="Videos"
            color={Pallete.white}
            fontSize="36px"
            textAlign="center"
          />
          <Title
            text="Download Reddit videos with sound audio"
            color={Pallete.default_text}
            fontSize="16px"
            margin="8px 0px 0px 0px"
          />
        </Flex>
        <Flex marginLeft="auto" marginRight="auto" width="90%" marginTop="20%">
          <TextBox placeholder={"Please enter a reddit URL..."} />
        </Flex>
      </Flex>
    </>
  );
}

export default MobileLayout;
