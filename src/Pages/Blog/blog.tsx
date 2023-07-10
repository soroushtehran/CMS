import React, { useRef, useState } from 'react'
import Container from '../../Components/Commons/Container/container';
import { Formik, Form, Field } from 'formik';
import { BsDownload } from 'react-icons/bs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './blog.scss';
import axios from 'axios';

interface BlogProps {
    title: string,
    desc: string,
    image: any
}

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


interface MyComponentState {
    content: string;
}

function Blog() {

    const [imageData, setImageData] = useState<string | null>(null);
    const [state, setState] = useState<MyComponentState>({ content: '' });

    const initialData: BlogProps = {
        title: "",
        desc: "",
        image: null
    }

    const submitForm = (values: BlogProps, resetForm: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("desc", values.desc);
        formData.append("image", values.image);
        formData.append("content", state.content);

        axios.post("http://localhost:3000/blog/addBlog", formData)
            .then(() => {
                resetForm();
            })
    }

    const handleContentChange = (content: string) => {
        setState({ content });
    };

    return (
        <Container>
            <Formik
                initialValues={initialData}
                onSubmit={(values, { resetForm }) => submitForm(values, resetForm)}
            >
                {
                    ({ setFieldValue }) => (
                        <Form>
                            <div className='form-wrapper'>
                                <Field type="text" name="title" placeholder="لطفا عنوان مقاله را وارد کنید" />
                                <Field
                                    as="textarea"
                                    name="desc"
                                    placeholder="لطفا توضیحات مقاله را وارد کنید"
                                    cols={30}
                                    rows={5}
                                />
                                <div className='blog-img-wrapper'>
                                    <label htmlFor="image" className='modal-image'><BsDownload /> بارگذاری عکس مقاله</label>
                                    <input
                                        className='input-img'
                                        type="file"
                                        name="image"
                                        id="image"
                                        onChange={(event) => {
                                            setFieldValue('image', event.currentTarget.files ? event.currentTarget.files[0] : null);
                                        }}
                                    />
                                </div>
                                <ReactQuill modules={modules} formats={formats} value={state.content} onChange={handleContentChange} />
                                <button type='submit'>ثبت مقاله</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </Container >
    )
}

export default Blog;