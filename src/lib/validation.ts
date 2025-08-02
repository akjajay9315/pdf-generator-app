import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required(),
  phone: yup.string().min(10, 'Phone must be at least 10 digits').required(),
  position: yup.string(),
  description: yup.string(),
})
