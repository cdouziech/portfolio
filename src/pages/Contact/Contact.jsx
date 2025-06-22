import './contact.scss';
import phoneIcon from '../../assets/phone.svg';
import mailIcon from '../../assets/mail.svg';

function Contact(){
    return(
        <div className='contact-page'>
            <h1>Contactez-moi !</h1>
            <div className='links-container'>
                <div className='icons-container'>
                    <img src={phoneIcon} alt="phone icon" />
                    <p>07 60 04 80 57</p>
                    <img src={mailIcon} alt="mail icon" />
                    <p>clotairedouziech@gmail.com</p>
                </div>
                <div className="form-container">
                    <h1>Envoyez moi un message !</h1>
                    <form target="_blank" action="https://formsubmit.co/clotairedouziech@gmail.com" method="POST">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" name="name" className="form-control" placeholder="Votre nom et/ou nom de  l'entreprise" required/>
                                </div>
                                <div className="col">
                                    <input type="email" name="mail" className="form-control" placeholder="Votre adresse email" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Votre message" className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-lg btn-dark btn-block">Envoyer !</button>
                    </form>
                </div>
                <p>Je répondrai dans les 24H !</p>
            </div>
        </div>
    )
}

export default Contact;