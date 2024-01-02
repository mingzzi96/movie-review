import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div>
      {preview ? <img src={preview} alt="이미지 미리보기" /> : null}
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value ? <button onClick={handleClearClick}>초기화 하기</button> : null}
    </div>
  );
}

export default FileInput;
