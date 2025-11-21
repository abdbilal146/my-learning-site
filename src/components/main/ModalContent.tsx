import { Container, AspectRatio, Card, Text } from "@mantine/core";
import classes from "./MainContent.module.scss"
import {PortableText, type PortableTextBlock} from "@portabletext/react"





export default function ModalContent({videoUrl,description}:SessionInfo){
  return(
    <>
      <Container m={0} fluid>
          <AspectRatio w="100%" h={"45rem"}>
            <iframe
              src={videoUrl}
              title="YouTube video player"
              style={{ border: 0, height: "45rem" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </Container>

        <Container m={0} p={0} h={"45rem"} w={"40%"} fluid className={classes.modal_text_container}>
          <Card style={{overflow: "auto"}} withBorder h={"45rem"} w={"100%"} >
            <Container>
              {/* <Text>{description}</Text> */}
              <PortableText
                value={description!}
              />
            </Container>
          </Card>
        </Container>
    </>
  )
}

interface SessionInfo{
    readonly videoUrl: string;
    readonly description?: PortableTextBlock
}