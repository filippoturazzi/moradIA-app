import React, { useState } from 'react';
import styled from "styled-components"
import { FaArrowLeft, FaGoogle, FaMicrosoft, FaApple, FaEye, FaEyeSlash} from 'react-icons/fa';

const CampoApresentacao = styled.section`
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
`
const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 100px;
    gap: 32px;
`

const TextosApresentacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-right: 160px;
`

const TituloApresentacao = styled.h2`
    margin: 0;
    font-stretch: 100%;
    line-height: 110.00000000000001%;
    style: extra-bold;
    font-family: var(--fonte-moradia);
    font-weight: 700;
    font-size: 32px;
    width: 550px;
`
const DescricaoApresentacao = styled.p`
    font-family: var(--fonte-moradia);
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    color: #6B7280;
    width: 600px;
`

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 100px;
  height: 960px;
  width: 25%;
  background-color: #FFF;
  border-bottom: solid 1px #E5E7EB; 
`
const AncoraNav = styled.a`
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 4px 14px;
    color: #6B7280;
    cursor: pointer;
    margin-top: -870px;
    margin-left: -50px;

    position: absolute;
    top: 45px;
    left: 50px

    display: inline-flex;
    align-items: center;
    gap: 8px; 

    &:hover{
        border-radius: 8px;
        background-color: rgba(238, 242, 255, 0.7); 
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 100px;
    width: 100%;
    max-width: 450px;
`;

const CabecalhoFormulario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TituloFormulario = styled.h3`
    margin: 0;
    font-family: var(--fonte-moradia), sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #111827;
`;

const DescricaoFormulario = styled.p`
    margin: 0;
    font-family: var(--fonte-moradia), sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #6B7280;
    line-height: 1.5;
`;

const GrupoBotoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const BotaoSocial = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    padding: 14px 24px;
    background-color: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;

    &:hover {
        background-color: #F9FAFB;
        border-color: #D1D5DB;
    }
`;

const Divisor = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: #9CA3AF;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    
    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #E5E7EB;
    }

    &::before {
        margin-right: 16px;
    }
    &::after {
        margin-left: 16px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #111827;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #D1D5DB;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #111827;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #5A5CE5;
    }

    &::placeholder {
        color: #9CA3AF;
    }
`;

const BotaoOlho = styled.button`
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: #6B7280;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    
    &:hover {
        color: #374151;
    }
`;

const OpcoesExtras = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
`;

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #6B7280;
    cursor: pointer;
`;

const CheckboxInput = styled.input`
    width: 20px;
    height: 20px;
    accent-color: #5A5CE5; 
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
`;

const LinkSenha = styled.a`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #5A5CE5;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const BotaoSubmit = styled.button`
    width: 100%;
    padding: 16px 24px;
    background-color: #5A5CE5; /* Azul da imagem */
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 8px;

    &:hover {
        background-color: #494bbd;
    }
`;

const TextoTermos = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #9CA3AF;
    text-align: center;
    margin-top: 32px;
    line-height: 1.5;
`;

const LinkTermos = styled.a`
    color: #9CA3AF;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        color: #6B7280;
    }
`;

function Login(){
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const toggleMostrarSenha = (e) => {
        e.preventDefault(); 
        setMostrarSenha(!mostrarSenha);
    };
    return(
        
        <CampoApresentacao>
        <LoginSection>
            <AncoraNav href='https://github.com/tmzhenrique' target='_blank'>
                   <FaArrowLeft size={14} /> Voltar ao site 
                </AncoraNav> 
                <FormContainer>
                    <CabecalhoFormulario>
                        <TituloFormulario>Acesse sua conta</TituloFormulario>
                        <DescricaoFormulario>
                            Insira seus dados para continuar sua jornada de descoberta.
                        </DescricaoFormulario>
                    </CabecalhoFormulario>

                    <GrupoBotoes>
                        <BotaoSocial>
                            <FaGoogle size={16} />
                            Continuar com o Google
                        </BotaoSocial>
                        <BotaoSocial>
                            <FaMicrosoft size={16} />
                            Continuar com o Outlook
                        </BotaoSocial>
                        <BotaoSocial>
                            <FaApple size={18} />
                            Continuar com a Apple
                        </BotaoSocial>
                    </GrupoBotoes>
                    <Divisor>OU USAR E-MAIL</Divisor>

                    <Form>
                        <InputGroup>
                            <Label htmlFor="email">Endereço de e-mail</Label>
                            <Input 
                                type="email" 
                                id="email" 
                                placeholder="contato@moradia.com.br" 
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="senha">Sua senha</Label>
                            <InputWrapper>
                                <Input 
                                    type={mostrarSenha ? "text" : "password"} 
                                    id="senha" 
                                    placeholder="••••••••••••" 
                                />
                                <BotaoOlho onClick={toggleMostrarSenha}>
                                    {mostrarSenha ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </BotaoOlho>
                            </InputWrapper>
                        </InputGroup>

                        <OpcoesExtras>
                            <CheckboxContainer>
                                <CheckboxInput type="checkbox" />
                                Lembrar de mim
                            </CheckboxContainer>
                            
                            <LinkSenha href="#">Esqueceu a senha?</LinkSenha>
                        </OpcoesExtras>

                        <BotaoSubmit type="button">Entrar na plataforma</BotaoSubmit>
                    </Form>

                    <TextoTermos>
                        Ao continuar, você concorda com os nossos <LinkTermos href="#">Termos de Serviço</LinkTermos> e nossa <LinkTermos href="#">Política de Privacidade</LinkTermos>.
                    </TextoTermos>

                </FormContainer>
        </LoginSection>
            <DivTextos>
                <TextosApresentacao>
                    <TituloApresentacao>Descubra o destino ideal para o seu próximo capítulo.</TituloApresentacao>
                    <DescricaoApresentacao>Conectamos seu estilo de vida, orçamento e metas de carreira com a infraestrutura das melhores cidades do país.</DescricaoApresentacao>
                    
                </TextosApresentacao>
            </DivTextos>
        </CampoApresentacao>
    )
}

export default Login