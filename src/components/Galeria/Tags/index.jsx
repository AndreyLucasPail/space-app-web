import styled from "styled-components";
import tags from "./tags.json"

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 40px;
`;

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    flex-shrink: 0;
`;

const TagsButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

const Tagbutton = styled.button`
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    background: rgba(217, 217, 217, 0.3);
    border: 2px solid #7B78E5;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;

    &:hover {
        border-color: #C98CF1;
    }
`;

const Tags = () => {
    return (
        <TagsContainer>
            <TagTitle>
                Busque por Tags:
            </TagTitle>

            <TagsButtonsContainer>
                {tags.map(tag => <Tagbutton key={tag.id}>{tag.titulo}</Tagbutton>)}
            </TagsButtonsContainer>

        </TagsContainer>
    )
}

export default Tags;
