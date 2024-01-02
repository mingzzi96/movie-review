function FileInput({ name, value, onChanage }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChanage(name, nextValue);
  };

  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
