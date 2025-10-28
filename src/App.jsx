import { styled } from "styled-components"
import GlobalStyle from "./components/GlobalsStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const App = () => {

  const [fotosState, setFotosState] = useState(fotos);
  const [fotoZoom, setFotoZoom] = useState(null);

  const BackGroundColor = styled.div`
    background: linear-gradient(174.61deg, #041B33 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    height: 100%;
    min-height: 100vh;
  `
  const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
  `

  const MainContainer = styled.main`
    display: flex;
    gap: 24px;
  `

  const GalleryContent = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `

  const whenToggleFavorite = (foto) => {
    if (foto.id === fotoZoom?.id) {
      setFotoZoom({
        ...fotoZoom,
        favorita: !fotoZoom.favorita,
      });
    }
    setFotosState(
      fotosState.map((galeryPhoto) => {
        return {
          ...galeryPhoto,
          favorita: galeryPhoto.id === foto.id ? !galeryPhoto.favorita : galeryPhoto.favorita,
        }
      })
    );
  }

  return (
    <>
      <BackGroundColor>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <MainContainer>
            <SideBar />
            <GalleryContent>
              <Banner />
              <Galeria whenFotoZoom={foto => setFotoZoom(foto)} fotos={fotosState} whenToggleFavorite={whenToggleFavorite} />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoZoom} whenToggleFavorite={whenToggleFavorite} />
      </BackGroundColor>
    </>
  )
}

export default App