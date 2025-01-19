import { useState } from "react"

const CreatePost = () => {
  const [contact,setContact] = useState("")
  const [image,setImage] = useState(null)
  return <>
  <div>
    <h1>Create Post</h1>
    <form>
      <input type="text" name="" placeholder="Post Title" 
      onChange={(e) => {
        setContact(e.target.value)
      }} id="" />
      <input type="file" onChange={() => {
        setImage(event.target.files[0])
      }} name="" id="" />
      <button type="submit">Submit</button>
    </form>
    <p>{contact}</p>
    {image && <img src={URL.createObjectURL(image)} alt="" style={{width: 200}} />}
  </div>
  </>
}

export default CreatePost