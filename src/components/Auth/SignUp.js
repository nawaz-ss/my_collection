import { Component } from 'react'
import {Button } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
    }

    signUp = (value) => {
        console.log(value)
        // let data = {
        //     email: 'kakarot62@yopmail.com',
        //     username: 'kakarot62',
        //     password1: 'Qwertz@1234',
        //     password2: 'Qwertz@1234'
        // }
        let url = 'https://geome-v-1.herokuapp.com/rest-auth/registration/'
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
                            username: '',
                            password1: '',
                            password2: '',
                            //acceptTerms: false
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email').required('Email Required'),
                            username: Yup.string(),
                            password1: Yup.string().required('Password required').matches(
                                /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                "Password must contain at least 6 characters, one uppercase, one number and one special case character"),
                            password2:Yup.string().oneOf([Yup.ref('password1')], 'Passwords must be same').required('Password confirm is required'),
                            //acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions')
            
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                this.signUp(values)
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form autoComplete='off'>
                            <div className='d-flex flex-column my-2'>
                                <label>Email Address</label>
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
                                <label>Username</label>
                                <Field
                                    name="username"
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
                                <label>Create Password</label>
                                <Field
                                    name="password1"
                                    type="password"
                                    placeholder='Enter Email address'
                                />
                                <ErrorMessage
                                    component='span'
                                    className='text-danger'
                                    name="password1"
                                />
                            </div>
                            <div className='d-flex flex-column my-2'>
                                <label>Confirm Password</label>
                                <Field
                                    name="password2"
                                    type="password"
                                    placeholder='Enter Email address'
                                />
                                <ErrorMessage
                                    component='span'
                                    className='text-danger'
                                    name="password2"
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
