import { useState } from 'react';
import styled from "styled-components"
import { sair } from '../../lib/supabase.js';

const Pagina = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: var(--fonte-moradia);
`;

const Cartao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 40px;
    background-color: #FFFFFF;
    border: 1px solid #E0E7FF;
    border-radius: 16px;
    box-shadow: 0 24px 48px -24px rgba(79, 70, 229, 0.35);
    text-align: center;
`;

const Avatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 0 2px var(--roxo-moradia);
`;

const Titulo = styled.h2`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #111827;
`;

const Email = styled.p`
    font-size: 14px;
    color: #6B7280;
`;

const BotaoSair = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: var(--roxo-moradia);
    color: #FFFFFF;
    font-family: var(--fonte-moradia);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

function Inicio({ usuario }){
    const [saindo, setSaindo] = useState(false);
    const { full_name, avatar_url } = usuario.user_metadata ?? {};

    async function handleSair() {
        setSaindo(true);
        await sair();
    }

    return(
        <Pagina>
            <Cartao>
                {avatar_url && <Avatar src={avatar_url} alt="" referrerPolicy="no-referrer" />}
                <Titulo>Olá, {full_name ?? 'bem-vindo(a)'}!</Titulo>
                <Email>{usuario.email}</Email>
                <BotaoSair onClick={handleSair} disabled={saindo}>
                    {saindo ? 'Saindo...' : 'Sair'}
                </BotaoSair>
            </Cartao>
        </Pagina>
    )
}

export default Inicio
