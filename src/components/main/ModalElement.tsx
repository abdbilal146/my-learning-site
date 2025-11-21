import { Modal, Container} from "@mantine/core";
import ModalNavbar from "./ModalNavbar";
import classes from "./MainContent.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalContent from "./ModalContent"
import type { PortableTextBlock } from "@portabletext/react";

export default function ModalElement() {
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, setOpened] = useState(true);

  const [sessionInfo, setSessionInfo] = useState<SessionInfo>({title:"", url:"",description:undefined})

  const selectedSerieInfo = location.state?.sessions || [];

  const selectedSerieName = location.state?.serieName

  /* const selectedVideo = location.state */

  

  function getSessionInfo(data:any){
    setSessionInfo(data)
    console.log("the data is :",sessionInfo)
  }



  return (
    <Modal
      styles={{
        root: {
          "--modal-size": "100%",
          overflow:"hidden"
        },
        body:{
          overflow:"hidden",
          
        }
      }}
      style={{
        overflow:"hidden",
        
      }}
      opened={opened}
      onClose={() => {
        setOpened(false)
      }}
      transitionProps={{
        onExited: () => {navigate("/")},
      }}
      title={selectedSerieName}
      centered
    >
      <div className={classes.modal_container}>
        <Container fluid m={0}>
          <ModalNavbar
          selectedSerieName={selectedSerieName}
           onSendToParent={getSessionInfo}
           data={selectedSerieInfo}/>
        </Container>

        {
          sessionInfo.url && sessionInfo.description ? <ModalContent
            description={sessionInfo.description}
            videoUrl={sessionInfo.url}
        /> : <Container className={classes.welcome_message_container} fluid w={"100%"}><p>choisissez une video sur la Navbar pour regarder</p></Container>
        }
        
        
      </div>
    </Modal>
  );
}




interface SessionInfo {
  title: string;
  url: string;
  description?: PortableTextBlock; 
}
