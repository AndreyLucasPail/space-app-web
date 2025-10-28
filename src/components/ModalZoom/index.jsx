import styled from "styled-components";
import Image from "../Galeria/Image";
import BotaoIcon from "../BotaoIcon";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogStyles = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ foto, whenToggleFavorite }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogStyles open={!!foto}>
                    <Image foto={foto} expandida={true} whenToggleFavorite={whenToggleFavorite} />
                    <form method="dialog">
                        <BotaoIcon formMethod="dialog">
                            <img src="/icons/fechar.png" alt="Icone de fechar" style={{ width: '20px', height: '20px' }} />
                        </BotaoIcon>
                    </form>
                </DialogStyles>
            </>}
        </>
    )
}

export default ModalZoom;