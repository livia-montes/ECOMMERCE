import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Conheça nossos produtos e escolha o que mais combina com você! Perfeitos para acompanhar você em todas as ocasiões, nosso produtos, são feitos com matériais de alta qualidade e desing moderno.
                </p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="Sandália marrom" />
                            <span className='badge-venda'>Mais vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>R$ 349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="Sandália pink" />
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Pink</h3>
                            <p className='preco'>R$ 299,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt="Tamanco" />
                            <span className='badge-venda'>Lançamento</span>
                        </div>
                        <div className='card-info'>
                            <h3>Tamanco</h3>
                            <p className='preco'>R$ 200,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt="Tenis" />
                            <span className='badge-venda'>Promoção!!!</span>
                        </div>
                        <div className='card-info'>
                            <h3>Tênis</h3>
                            <p className='preco'>R$ 550, 50</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt="Bolsa" />
                            <span className='badge-venda'>Chance imperdível</span>
                        </div>
                        <div className='card-info'>
                            <h3>Bolsa</h3>
                            <p className='preco'>R$ 1000,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>

                        <div className='card'>
                            <div className='card-image'>
                                <img src={note} alt="Porta Notebook" />
                                <span className='badge-venda'>Novidade</span>
                            </div>
                            <div className='card-info'>
                                <h3>Porta Notebook</h3>
                                <p className='preco'>R$ 99,90</p>
                                <button className='btn'>Comprar agora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}