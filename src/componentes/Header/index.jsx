import styled from 'styled-components';
import logo from '../../assets/MoradIALogo.svg'

const HeaderLP = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  height: 80px;
  background-color: #FFF;
  border-bottom: solid 1px #E5E7EB; 
`

const MoradIA = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const TextoMoradIA = styled.h2`
    font-weight: 700;
    font-family: var(--fonte-moradia);
    color:black;
`
const LogoMoradIA = styled.img`
    padding: 5px;
    border-radius: 7px;
    background-color: #4F46E5;
    width: 20px;
    height: 20px;
`

const EstiloStrong = styled.strong`
    color: #4F46E5;
`

const DivLinksHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
`

const AncoraNav = styled.a`
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 4px 14px;
    color: #6B7280;
    cursor: pointer;

    &:hover{
        border-radius: 8px;
        background-color: rgba(238, 242, 255,0.7); 
    }
`
const AncoraNavDestaque = styled(AncoraNav)`
    color: #FFF;
    font-family: var(--fonte-moradia);
    font-size: 13px;
    font-weight: 600;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: #4F46E5;

    &:hover{
        background-color: #EEF2FF;
        color: #4F46E5;
        box-shadow: inset 0 0 0 2px #4F46E5;
    }
`

function Header(){
    return(
        <HeaderLP>
            <MoradIA>
                <LogoMoradIA src={logo}></LogoMoradIA>
                <TextoMoradIA>Morad<EstiloStrong>IA</EstiloStrong></TextoMoradIA>
            </MoradIA>  
            <DivLinksHeader>
                <AncoraNav href='https://github.com/tmzhenrique' target='blank'>Como funciona</AncoraNav> 
                <AncoraNav>Indicadores</AncoraNav>
                <AncoraNav>Preços</AncoraNav>
                <AncoraNavDestaque>Encontrar minha cidade</AncoraNavDestaque>
            </DivLinksHeader>
                   
        </HeaderLP>
    )
}

export default Header;