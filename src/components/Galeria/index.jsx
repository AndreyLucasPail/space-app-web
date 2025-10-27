import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const GaleriaContainer = styled.div`
    display: flex;
`;

const FluidSection = styled.section`
    flex-grow: 1;
    `;

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], whenFotoZoom }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <FluidSection>
                    <Title>Navegue pela Galeria</Title>
                    <ImagesContainer>
                        {fotos.map((foto, index) => (
                            <Image onZoomSelect={whenFotoZoom} key={index} foto={foto} />
                        ))}
                    </ImagesContainer>
                </FluidSection>
                <Popular />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;