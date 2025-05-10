// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function NewPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // const [warning_title, setWarning_title] = useState(false);
    // const [warning_content, setWarning_content] = useState(false);

    const submit = (data) => {
        // console.log(data);
        const blog = {
            'title': data.title,
            'content': data.content,
            'type': data.type
        }

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        };

        // console.log(fetchOptions);

        const fetchData = async () => {
            const res = await fetch('http://localhost:8080/create', fetchOptions);
            if (res.ok) {
                const result = await res.json();
                const { status, data } = result;
                console.log(status, data);
                navigate(`/posts/${data}`);
        
                console.log('ok');
            } else { console.log("loi"); }
        }

        fetchData();
    }

    return (
        <form className="box create" onSubmit={handleSubmit(submit)}>
            <div>
                {/* <label htmlFor="title">Title</label><br /> */}
                <input className="title" id="title" placeholder="Title..."
                    {...register("title", { required: true })} />
                {errors.title && <label className="explain error"><br />Vui lòng nhập tiêu đề</label>}
                <br />
            </div>
            <div>
                {/* <label htmlFor="content">Title</label><br /> */}
                <textarea className={"input-content"} id="content" placeholder="Content..."
                    {...register("content", { required: true })} />
                {errors.content && <label className="explain error">Vui lòng nhập nội dung</label>}
                <br />
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select id="type" {...register('type', {required: "phải chọn"})}>
                    <option value="">-- select --</option>
                    <option value={'sport'}>sport</option>
                    <option value={'tech'}>tech</option>
                </select>
                {errors.type && <label className="explain error">{errors.type.message}</label>}
            </div>
            <button type="submit">Đăng</button>
        </form>
    )
}

export default NewPost;