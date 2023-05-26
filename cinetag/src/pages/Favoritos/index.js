import styles from './Favoritos.module.css'
import Banner from "components/Banner";
import Card from 'components/Card';
import Titulo from "components/Titulo";

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='picachu' capa='https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png' />
            </section>
        </>
    )
}
export default Favoritos;