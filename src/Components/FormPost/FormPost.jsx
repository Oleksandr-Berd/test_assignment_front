import { useState } from "react";
import SignUp from "../../Utilities/Buttons/SignUp/SignUp";
import css from "./FormPost.module.css"

const FormPost = ({ submit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [avatar, setAvatar]= useState("")
  const submitHandler = (evt) => {
    evt.preventDefault();

    submit({
      name,
      email,
      phone,
      position,
      avatar,
    });
    // setName("");
    // setEmail("");
    // setPhone("");
    // setPosition("");
    // window.location.reload();
  };

  const handleImageChange = (evt) => {
    const files = evt.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }
    setAvatar(formData);
  };

  return (
    <form
      action="submit"
      className={css.formPost}
      onSubmit={submitHandler}
      method="post"
    >
      <input
        type="text"
        className={css.inputData}
        placeholder="Your name"
        onChange={(evt) => setName(evt.currentTarget.value)}
      />
      <input
        type="email"
        className={css.inputData}
        placeholder="Email"
        onChange={(evt) => setEmail(evt.currentTarget.value)}
      />
      <label className={css.phoneLabel}>
        <input
          type="tel"
          className={css.inputData}
          placeholder="Phone"
          id={css.inputPhone}
          onChange={(evt) => setPhone(evt.currentTarget.value)}
        />
        +38 (XXX) XXX - XX - XX
      </label>
      <div className={css.radioCon}>
        <p className={css.radioTitle}>Select your position</p>
        <label>
          <input
            type="radio"
            name="position"
            value="1"
            onChange={(evt) => setPosition(Number(evt.currentTarget.value))}
          />
          <span>Frontend developer</span>
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="2"
            onChange={(evt) => setPosition(evt.currentTarget.value)}
          />
          <span>Backend developer</span>
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="3"
            onChange={(evt) => setPosition(evt.currentTarget.value)}
          />
          <span>Designer</span>
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="4"
            onChange={(evt) => setPosition(evt.currentTarget.value)}
          />
          <span>QA</span>
        </label>
      </div>
      <label className={css.inputFile}>
        <input type="file" name="image" onChange={handleImageChange} />
      </label>
      <SignUp />
    </form>
  );
};

export default FormPost;
