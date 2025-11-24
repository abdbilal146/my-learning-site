import { Container, AspectRatio, Card,  Flex } from "@mantine/core";
import classes from "./MainContent.module.scss"
import {PortableText, type PortableTextBlock} from "@portabletext/react"

export default function ModalContent({videoUrl,description}:SessionInfo){
  return(
    <Flex w="100%" gap="md" align="flex-start">
      <Container m={0} fluid style={{ flex: "1 1 0", width: 0 }}>
          <AspectRatio ratio={16 / 9} w="100%">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              style={{ border: 0, height: "100%", width: "100%" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </Container>

        <Container m={0} p={0} h={"45rem"} fluid className={classes.modal_text_container} style={{ flex: "1 1 0", width: 0 }}>
          <Card style={{overflow: "auto"}} withBorder h={"100%"} w={"100%"} >
            <Container>
              {/* <Text>{description}</Text> */}
              <PortableText
                value={description!}
              />
            </Container>
          </Card>
        </Container>
    </Flex>
  )
}

interface SessionInfo{
    readonly videoUrl: string;
    readonly description?: PortableTextBlock
}