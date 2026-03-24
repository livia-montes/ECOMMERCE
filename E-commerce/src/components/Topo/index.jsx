import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                    <p>Tudo em 10x sem juros!</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src="./logo.png" />
                    </a>
                </picture>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}