import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/informationContainer.sass";


function InformationContainer() {
  return ( <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon"/>
      <div>
        <h3>Telefone</h3>
        <p>(21) 998338094</p>
      </div>
    </div>
    <div className="info-card">
      <AiOutlineMail id="email-icon"/>
      <div>
        <h3>E-mail</h3>
        <p>larissaspinelli03@gmail.com</p>
        
      </div>

    </div>
    <div className="info-card">
      <AiFillEnvironment id="pin-icon"/>
      <div>
        <h3>Localização</h3>
        <p>Rio de Janeiro</p>
        
      </div>

    </div>


  </section>
  )
}

export default InformationContainer