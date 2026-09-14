import styled from "styled-components"

const CampoApresentacao = styled.section`
    display: flex;
    padding: 80px 100px;
    gap: 64px;
`
const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 636px;
    gap: 32px;
`

const DivImagem = styled.div`
    padding: 40px;
`
const TextosApresentacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const TituloApresentacao = styled.h2`
    margin: 0;
    font-stretch: 100%;
    line-height: 110.00000000000001%;
    style: extra-bold;
    font-family: var(--fonte-moradia);
    font-weight: 800;
    font-size: 56px;
`
const DescricaoApresentacao = styled.p`
    font-family: var(--fonte-moradia);
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    color: #6B7280;
`
const AncorasApresentacao = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const AncoraApresentacaoRoxo = styled.a`
    cursor:pointer;
    display: flex;
    align-items: center;
    text-aling: center;
    border-radius: 12px;
    padding: 16px 32px;
    background-color: var(--roxo-moradia);
    font-family: var(--fonte-moradia);
    color: #FFFF;
    font-weight: 700;
    font-size: 16px;

    &:hover{
        background-color: #EEF2FF;
        color: #4F46E5;
        box-shadow: inset 0 0 0 2px #4F46E5;
    }
`
const AncoraApresentacaoTransparente = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 2px 32px;
    gap: 8px;

    &:hover{    
        border-radius: 8px;
        background-color: rgba(238, 242, 255,0.7); 
    }
`

const AncoraApresentacaoTransparenteTexto = styled.h3`
    font-family: var(--fonte-moradia);
    font-size: 16px;
    font-weight: 600;
    color: var(--roxo-moradia);
`
function Apresentacao(){
    return(
        <CampoApresentacao>
            <DivTextos>
                <TextosApresentacao>
                    <TituloApresentacao>Encontre a cidade onde sua vida faz mais sentido</TituloApresentacao>
                    <DescricaoApresentacao>Descubra quais cidades combinam com seu estilo de vida, orçamento, objetivos e preferências. Nós analisamos centenas de dados para você morar no lugar certo.</DescricaoApresentacao>
                </TextosApresentacao>
                <AncorasApresentacao>
                    <AncoraApresentacaoRoxo>Encontrar minha cidade</AncoraApresentacaoRoxo>
                    <AncoraApresentacaoTransparente>
                        <AncoraApresentacaoTransparenteTexto>Como funciona</AncoraApresentacaoTransparenteTexto>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.7995 8H12.2005M7.99998 12.2005L12.2005 8L7.99998 3.79952" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </AncoraApresentacaoTransparente>
                    

                </AncorasApresentacao>
            </DivTextos>
            <DivImagem></DivImagem>
        </CampoApresentacao>
    )
}

export default Apresentacao