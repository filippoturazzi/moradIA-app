import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase.js';
import Login from './componentes/Login/index.jsx';
import Dashboard from './componentes/Dashboard/index.jsx';


function App(){
  const [sessao, setSessao] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSessao(data.session);
      setCarregando(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_evento, novaSessao) => {
      setSessao(novaSessao);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  function iniciarAnalise() {
    // Ligar ao onboarding (etapa 1/8) quando ele for implementado.
  }

  if (carregando) return null;

  return(
    <>
      {sessao ? <Dashboard usuario={sessao.user} onIniciarAnalise={iniciarAnalise} /> : <Login />}
    </>
  )
}

export default App;
