import { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    componentDidMount() {
    }

    signIn = (value) => {
        console.log(value)
        let url = 'https://geome-v-1.herokuapp.com/rest-auth/login/'
        axios.post(url, value)
          .then(function (response) {
            console.log('API Response',response);
          })
          .catch(function (error) {
            console.log('API Response',error);
          });
    }
    
    render() {
        return (
            <div className='d-flex flex-column justufy-content-center align-items-center'>
                <div className=''>
                    <h1 className=''>Sign In</h1>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email').required('Email Required'),
                            password: Yup.string().required('Password required')
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                this.signIn(values)
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form autoComplete='off'>
                            <div className='d-flex flex-column my-2'>
                                <label>Username</label>
                                <Field
                                    name="email"
                                    type="text"
                                    placeholder='Enter Email address'
                                />
                                <ErrorMessage
                                    className='text-danger'
                                    name="username"
                                    component='span'
                                />
                            </div>
                            <div className='d-flex flex-column my-2'>
                                <label>Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder='Enter Email address'
                                />
                                <ErrorMessage
                                    component='span'
                                    className='text-danger'
                                    name="password"
                                />
                            </div>
                            {/* <input type="hidden" name="csrfmiddlewaretoken" value={this.state.CSFRToken} /> */}
                            <Button variant='primary' type='submit' className='my-2'>Sign In</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
}
