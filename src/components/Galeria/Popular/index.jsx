import styled from "styled-components";
import Title from "../../Title";

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const CardPlaceholder = styled.div`
    width: 212px;
    height: 158px; 
    background-color: #1a1a1a; 
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;
    border: 1px solid #333;
`;

const Popular = () => {
    const placeholderCards = Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        title: `Imagem ${index + 1}`
    }));

    return (
        <section>
            <Title $align="center">Populares</Title>
            <ColunaFotos>
                {placeholderCards.map(card => (
                    <CardPlaceholder key={card.id}>
                        {card.title}
                    </CardPlaceholder>
                ))}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>

    );
}

export default Popular;