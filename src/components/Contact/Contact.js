import { useForm } from '@formspree/react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  const [state, handleSubmit] = useForm('xbloblro') // Replace with your Formspree form ID

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      {state.succeeded ? (
        <div style={{ color: 'var(--clr-primary)', marginTop: '2em' }}>
          Thank you for your message!
        </div>
      ) : (
        <form className='contact__form' onSubmit={handleSubmit}>
          <input
            className='contact__input'
            type='text'
            name='name'
            placeholder='Your Name'
            required
          />
          <input
            className='contact__input'
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            className='contact__textarea'
            name='message'
            placeholder='Your Message'
            required
            rows={5}
          />
          <button type='submit' className='btn btn--outline' disabled={state.submitting}>
            Send Email
          </button>
          {state.errors && state.errors.length > 0 && (
            <div style={{ color: 'red', marginTop: '1em' }}>
              {state.errors.map((err) => (
                <div key={err.message}>{err.message}</div>
              ))}
            </div>
          )}
        </form>
      )}
    </section>
  )
}

export default Contact
