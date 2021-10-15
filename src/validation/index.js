import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter a name for the order')
        .min(2, 'name must be at least 2 characters')
})

export default schema