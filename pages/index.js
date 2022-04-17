import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
     
      const handleSubmit = async (event) => {

        event.preventDefault()

        const data = {
          email: event.target.email.value,
          name: event.target.name.value,
          msg: event.target.msg.value,
        }

        const endpoint = `/api/emailReceive/?email=${data.email}&name=${data.name}&msg=${data.msg}`;
        const options = {

          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const response = await fetch(endpoint, options)
        const result = await response.json();

      }

  return (
  <div className={styles.container}>

      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input className={styles.input} type="text" id="email" name="email" placeholder="Email.." />
 
        <label htmlFor="name">Name</label>
        <input className={styles.input} type="text" id="name" name="name" placeholder="Name" />
 
        <label htmlFor="msg">Message</label>
        <textarea className={styles.textarea} id="msg" name="msg" placeholder="Message" ></textarea>

        <br/>
        <button type="submit">Send</button>
      </form>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Robertodalfre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp;&nbsp;  {' '}
          <span className={styles.logo}>
            <Image src="/Frame.svg" alt="FrameDalfre Logo" width={350} height={110} />
          </span>
        </a>
      </footer>
      <div >
    <div className={styles.API_Description} >
        <br/>
        <div class="col-4">
            EndPoint: api/emailReceive/
        </div>
        <br/>
        <div class="col-4">
            Parâmetros: 
              <br/>- email (string)
              <br/>- name  (string)
              <br/>- msg   (string)
        </div>
    </div>
</div>
    </div>
    
  )
}