import React, { useRef } from 'react'
import Container from '../../../Components/Commons/Container/container'
import './productsForm.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import InfoMessage from '../../../Components/Commons/InfoMessage/infoMessage'
import { InputGroup, FormLabel, Col, Row } from 'react-bootstrap'
import MyButton from '../../../Components/Commons/Button/myButton'
import { motion, useMotionValue, useTransform } from "framer-motion"
import { productsViewModel } from '../products'
import { v4 as Guid } from 'uuid';



interface inputsType {
    name: string;
    translate: string
}

interface FormValuesViewModel {
    [key: string]: string;
}

const formInptsData: inputsType[] = [
    {
        name: 'courseName',
        translate: 'نام دوره',
    },
    {
        name: 'courseLevel',
        translate: 'سطح آموزش',
    },
    {
        name: 'videoCount',
        translate: 'تعداد ویدیو',
    },
    {
        name: 'cost',
        translate: 'قیمت',
    },
    {
        name: 'totalCourseTimes',
        translate: 'زمان کل آموزش',
    },
    {
        name: 'CourseTeacherName',
        translate: 'مدرس دوره',
    },
    {
        name: 'latestVersion',
        translate: 'آخرین آپدیت',
    },
    {
        name: 'courseIMG',
        translate: 'عکس محصول',
    },
    {
        name: 'courseVideoIMG',
        translate: 'عکس کاور',
    },
    {
        name: 'videoIMG',
        translate: 'ویدیو دوره',
    },
]

interface ProductsFormProps {
    getNewProducts: (products: productsViewModel[]) => void;
    products: productsViewModel[]
}


export default function ProductsForm({ getNewProducts, products }: ProductsFormProps) {
    // const { v4: Guid } = require('uuid');
    const courseIMGRef = useRef<any>(null)
    const translator = (word: string) => {
        return formInptsData.find(item => item.name === word)?.translate;
    }

    const formValidator = (values: FormValuesViewModel): FormValuesViewModel => {
        let isValid: FormValuesViewModel = {};

        for (const key in values) {
            if (values[key] === '') {
                const word = translator(key);
                isValid[key] = `فیلد "${word}" الزامی می باشد.`;
            }
        }

        return isValid;
    }

    return (
        <section className='products-form'>
            <Formik
                initialValues={{
                    courseName: 'javaScript',
                    courseLevel: 'sakht',
                    videoCount: '2',
                    cost: '2000',
                    totalCourseTimes: '5',
                    CourseTeacherName: 'soheil tehrani',
                    latestVersion: '1401/03/01',
                    courseIMG: '',
                    // courseVideoIMG: '',
                    // videoIMG: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    // setSubmitting(false)
                    // const url = URL.createObjectURL(courseIMGRef.current.files[0])
                    const newProducts: productsViewModel[] = [...products, { ...values, Guid: Guid() }];
                    getNewProducts(newProducts)
                }}
                validate={(values) => {
                    const errors = formValidator(values);

                    return errors;
                }}
            >
                {
                    ({ touched, isSubmitting, handleChange }) => (
                        <Form className="import-products">
                            <div className='inputs-wrapper'>
                                <div>
                                    <FormLabel htmlFor='courseName'> نام دوره </FormLabel>
                                    <InputGroup className='my-input-group'>
                                        <Field type='text' name='courseName' placeholder='نام دوره...' />
                                        {!!touched.courseName && <ErrorMessage name='courseName' render={(msg: string) => <InfoMessage message={msg} />} />}
                                    </InputGroup>

                                    <FormLabel htmlFor='courseLevel'> سطح آموزش </FormLabel>
                                    <InputGroup className='my-input-group'>
                                        <Field type='text' name='courseLevel' placeholder='سطح آموزش...' />
                                        {!!touched.courseLevel && <ErrorMessage name='courseLevel' render={(msg: string) => <InfoMessage message={msg} />} />}
                                    </InputGroup>

                                    <FormLabel htmlFor='videoCount'> تعداد ویدیو </FormLabel>
                                    <InputGroup className='my-input-group'>
                                        <Field type='number' name='videoCount' placeholder='تعداد ویدیو...' />
                                        {!!touched.videoCount && <ErrorMessage name='videoCount' render={(msg: string) => <InfoMessage message={msg} />} />}
                                    </InputGroup>

                                    <FormLabel htmlFor='cost'> قیمت </FormLabel>
                                    <InputGroup className='my-input-group'>
                                        <Field type='number' style={{ direction: 'rtl' }} name='cost' placeholder='قیمت...' />
                                        {!!touched.cost && <ErrorMessage name='cost' render={(msg: string) => <InfoMessage message={msg} />} />}
                                    </InputGroup>
                                </div>
                                <div>
                                    <motion.img src="/images/Products/3d-paper-and-pen.png" alt="importPng" animate={{ x: -100 }} />
                                </div>
                            </div>
                            <div>
                                <FormLabel htmlFor='totalCourseTimes'> زمان کل آموزش </FormLabel>
                                <InputGroup className='my-input-group'>
                                    <Field type='text' name='totalCourseTimes' placeholder='زمان کل آموزش...' />
                                    {!!touched.totalCourseTimes && <ErrorMessage name='totalCourseTimes' render={(msg: string) => <InfoMessage message={msg} />} />}
                                </InputGroup>

                                <FormLabel htmlFor='CourseTeacherName'> مدرس دوره </FormLabel>
                                <InputGroup className='my-input-group'>
                                    <Field type='text' name='CourseTeacherName' placeholder='مدرس دوره...' />
                                    {!!touched.CourseTeacherName && <ErrorMessage name='CourseTeacherName' render={(msg: string) => <InfoMessage message={msg} />} />}
                                </InputGroup>

                                <FormLabel htmlFor='latestVersion'> آخرین آپدیت </FormLabel>
                                <InputGroup className='my-input-group'>
                                    <Field type='text' name='latestVersion' placeholder='آخرین آپدیت...' />
                                    {!!touched.latestVersion && <ErrorMessage name='latestVersion' render={(msg: string) => <InfoMessage message={msg} />} />}
                                </InputGroup>

                                <FormLabel htmlFor='courseIMG'> عکس محصول </FormLabel>
                                <InputGroup className='my-input-group'>
                                    <Field type='file' name='courseIMG' ref={courseIMGRef} handleChange={(e: any) => console.log(e.target.value)} placeholder='بارگذاری عکس محصول...' />
                                    {!!touched.courseIMG && <ErrorMessage name='courseIMG' render={(msg: string) => <InfoMessage message={msg} />} />}
                                </InputGroup>
                                {/* 
                                    <FormLabel htmlFor='courseVideoIMG'> عکس کاور </FormLabel>
                                    <InputGroup className='my-input-group'>
                                        <Field type='file' name='courseVideoIMG' placeholder='بارگذاری عکس کاور...' />
                                        {!!touched.courseVideoIMG && <ErrorMessage name='courseVideoIMG' render={(msg: string) => <InfoMessage message={msg} />} />}
                                    </InputGroup>

                                    <FormLabel htmlFor='videoIMG'> ویدیو دوره </FormLabel>
                                    <InputGroup className='my-input-group'>
                                        <Field type='file' name='videoIMG' placeholder='بارگذاری ویدیو دوره...' />
                                        {!!touched.videoIMG && <ErrorMessage name='videoIMG' render={(msg: string) => <InfoMessage message={msg} />} />}
                                    </InputGroup> */}

                                <motion.div animate={{ y: -100 }}>
                                    <button type='submit' > افزودن محصول </button>
                                </motion.div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </section >
    )
}
