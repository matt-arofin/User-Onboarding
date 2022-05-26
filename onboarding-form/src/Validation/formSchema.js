// 

import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup.string().trim().required("First name is required").min(3, "Min length 3 characters"),
    last_name: yup.string().trim().required("Last name is required").min(3, "Min length 3 characters"),
    email: yup.string().email().required("An email address is required"),
    password: yup.string().trim().required("A password is required").min(8, "Min length 8 characters"),
    terms: yup.boolean()
})

export default formSchema