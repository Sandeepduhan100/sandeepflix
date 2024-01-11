import React from 'react'
import ContactCard from '../components/contactcard/ContactCard'
import ContactForm from '../components/contactform/ContactForm'

function Contact() {
  return (
    <div className='contact-container'>
<ContactCard />
<section className="heading1">
  <h2>We would love to hear from you</h2>
</section>
<ContactForm/>
    </div>
  )
}

export default Contact