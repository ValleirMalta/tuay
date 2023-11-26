import Style from '../styles/login.module.scss'
import Image from 'next/image'


export default function Login() {
  return (
    <div className={Style.pageLogin}>
      <div className={Style.box}>
        <Image 
          src="/assets/logo.png" 
          width={150}
          height={150}
          alt="Logo"
          className={Style.logo}
        />
        <div className={Style.boxFormLogin}>
          <h2>Entrar</h2>
          <div className={Style.formLogin}>
            <input type="text" name="E-mail" placeholder='E-mail'/>
            <input type="password" name="Senha" placeholder='Senha' />
            <button className={Style.toEnter}>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}