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
                <div class="form-container">
                    <h1>Envoyez moi un message !</h1>
                    <form target="_blank" action="https://formsubmit.co/clotairedouziech@gmail.com" method="POST">
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" name="name" class="form-control" placeholder="Votre nom et/ou nom de  l'entreprise" required/>
                                </div>
                                <div class="col">
                                    <input type="email" name="mail" class="form-control" placeholder="Votre adresse email" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Votre message" class="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-lg btn-dark btn-block">Envoyer !</button>
                    </form>
                </div>
                <p>Je répondrai dans les 24H !</p>
            </div>
        </div>
    )
}

export default Contact;