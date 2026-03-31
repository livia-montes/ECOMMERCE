import './Capa.css';
import banner from '../../assets/banner.jpg';
import bannerMobile from '../../assets/banner_mobile.jpg';

export default function Capa() {
    return (
        <section className='secao_capa'
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            <div className='texto'>
                <h2>Preview</h2>
                <h1>Verão</h1>
                <button className='btn'>Comprar</button>
            </div>
        </section>
    )
}