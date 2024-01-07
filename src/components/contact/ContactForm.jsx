import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your full name should be at least 3 characters.')
      .max(30, 'Your full name cannot be longer than 30 characters.')
      .required('Please enter your full name'),
    subject: yup
      .string()
      .min(3, 'Your subject must be at least 3 characters.')
      .max(10, 'Your subject cannot be longer than 10 characters.')
      .required('Please enter your subject'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    message: yup
      .string()
      .min(3, 'Your message must be at least 3 characters.')
      .max(150, 'Your message cannot be longer than 150 characters.')
      .required('Please enter your message'),
  })
  .required();

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto p-4 max-w-xs bg-gray-100 mb-100'>
        <div className='mb-4'>
            <div>
                <label><strong>Full name</strong></label>
            </div>
            <input{...register('fullName')} />
            <p>{errors.fullName?.message}</p>
        </div>
        <div className='mb-4'>
            <div>
                <label><strong>Subject</strong></label>
            </div>
            <input {...register('subject')} />
            <p>{errors.subject?.message}</p>
        </div>
        <div className='mb-4'>
            <div>
                <label><strong>Email</strong></label>
            </div>
            <input type="email" {...register('email')} />
            <p>{errors.email?.message}</p>
        </div>
        <div className='mb-4'>
            <div>
                <label><strong>Message</strong></label>
            </div>
            <input {...register('message')} />
            <p>{errors.message?.message}</p>
        </div>
      
      
      <button className="p-4 hover:bg-gray-200"><input type="submit" /></button>
    </form>
  );
}

export default ContactForm;