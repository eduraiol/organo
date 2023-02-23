import './Rodape.css'

const Rodape = () => {
    return (

        <footer className='mainRodape'>
            <div className='redeSocial'>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src='/imagens/fb.png' alt='Logomarca facebook' />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <img src="/imagens/tw.png" alt="" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="/imagens/ig.png" alt="" />
                </a>
            </div>
            <div className='logoOrgano'>
                <img src='/imagens/logo.png' alt='Logomarca organo' />
            </div>
            <div className='desenvolvidoPor'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape