import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <p>Tudo em 10x sem juros!</p>
            </div>

            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src="./logo.jpg"/>
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