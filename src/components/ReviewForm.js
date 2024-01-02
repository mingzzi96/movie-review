import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    // target input의 name 프로퍼티와 해당 프로퍼티 안의 value값을 가져와서 저장.
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input
        name="rating"
        type="number"
        value={values.rating}
        onChange={handleInputChange}
      />
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChanage={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
