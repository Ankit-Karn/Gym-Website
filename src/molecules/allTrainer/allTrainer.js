import styles from './allTrainer.module.css'

export default function AllTrainer(){
    return(
        <>
        <h1 className={styles.heading}>ALL TRAINERS</h1>
         <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img className={styles.img} src='https://l450v.alamy.com/450v/wbadcd/perfect-body-muscular-young-african-man-exercising-with-dumbbells-while-standing-against-grey-background-studio-shot-sport-concept-wbadcd.jpg' alt="Trainer 1" />
            <div className={styles.cardContent}>
              <h3>John Doe</h3>
              <p>Fitness Coach</p>


              

            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src='https://www.shutterstock.com/image-photo/sport-healthy-lifestyle-concept-smiling-260nw-1428376907.jpg' alt="Trainer 2" />
            <div className={styles.cardContent}>
              <h3>Jane Smith</h3>
              <p>Personal Trainer</p>


              
 
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src='https://static.toiimg.com/photo/73174476.cms' alt="Trainer 3" />
            <div className={styles.cardContent}>
              <h3>Mike Johnson</h3>
              <p>Yoga Instructor</p>


             
   
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src='https://www.liveabout.com/thmb/ia9vTGzC4fnTxr09GLjurYFzIUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dance-fitness-1067009516-5c81907946e0fb0001136604.jpg' alt="Trainer 4" />
            <div className={styles.cardContent}>
              <h3>Sarah Williams</h3>
              <p>Zumba Instructor</p>


            

            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src='https://i.ndtvimg.com/i/2016-02/exercise625_625x350_71456216886.jpg' alt="Trainer 5" />
            <div className={styles.cardContent}>
              <h3>Rena Brown</h3>
              <p>Strength Trainer</p>


            
   
            </div>
          </div>
          <div  className={styles.card}>
            <img className={styles.img} src='https://hips.hearstapps.com/hmg-prod/images/701/articles/2017/01/how-much-joining-gym-helps-health-2-jpg-1488906648.jpeg?crop=0.636xw:1xh;center,top&resize=1200:*' alt="Trainer 6" />
            <div className={styles.cardContent}>
              <h3>Emily Davis</h3>
              <p>Pilates Instructor</p>



            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.img} src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_43/3066896/191023-crossfit-ac-1153p.jpg' alt="Trainer 7" />
            <div className={styles.cardContent}>
              <h3>Mark Wilson</h3>
              <p>CrossFit Coach</p>


   
            </div>
          </div>
            </div>
        
        </>
    )
}