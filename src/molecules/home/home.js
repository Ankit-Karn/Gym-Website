import styles from './home.module.css'

export default function Home(){
    return (
        <div className={styles.outer} id='#home'>

        <div className={styles.textpart}>
            <h2 className={styles.text}>"Take care of your<span className={styles.red}> body </span>.<br/>
            It's the only place you have to <span className={styles.red}>live</span>
            "</h2>
            <button className={styles.btn}>Join With Us</button>
        </div>

          <img className={styles.img} src='https://img-aws.ehowcdn.com/640x960/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/cache.gettyimages.com/e3e9059176c64c49a562168190d835a5.jpg'/> 
        </div>
    )
}