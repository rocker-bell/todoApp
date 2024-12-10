import "./style.css"

export default function App() {
  return  (
    <>
    <form className="new-item-form form">
      <div className="form-item">
        <label htmlFor="item">Enter</label>
        <input type="text" id="item" />
    </div>
    <button className="btn"> submit</button>
    </form>
    <h3>submitted items:</h3>
    <div className="itemcheck">
      <div className="item1">
        <input type="checkbox" name="" id="item1" />
        <label htmlFor="item1">item1</label>
        <button className="btn btn-danger">Remove</button>
      </div>

      <div className="item1">
        <input type="checkbox" name="" id="item1" />
        <label htmlFor="item1">item2</label>
        <button className="btn btn-danger">Remove</button>
      </div>
    </div>
    </>  
  )
  
}