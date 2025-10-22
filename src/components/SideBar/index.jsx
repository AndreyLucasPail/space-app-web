import styled from "styled-components";
import NavItem from "../NavItem";

const StyledList = styled.ul`

    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const SideBar = () => {
    return (<aside>
        <nav>
            <StyledList>
                <NavItem active={true} activeIcon={"/icons/Home - ativo.png"} inactiveIcon={"/icons/Home - inativo.png"}>
                    Início
                </NavItem>
                <NavItem activeIcon={"/icons/Mais vistas - ativo.png"} inactiveIcon={"/icons/Mais vistas - inativo.png"}>
                    Mais vistas
                </NavItem>
                <NavItem activeIcon={"/icons/Mais curtidas - ativo.png"} inactiveIcon={"/icons/Mais curtidas - inativo.png"}>
                    Mais Curtidas
                </NavItem>
                <NavItem activeIcon={"/icons/Novas - ativo.png"} inactiveIcon={"/icons/Novas - inativo.png"}>
                    Novas
                </NavItem>
                <NavItem activeIcon={"/icons/Surpreenda-me - ativo.png"} inactiveIcon={"/icons/Surpreenda-me - inativo.png"}>
                    Surpreenda-me
                </NavItem>
            </StyledList>
        </nav>
    </aside>);
}

export default SideBar;