import { useState } from 'react'
import './App.css'
import { fetchResponse } from './connectAi.js'

function App() {
  const [productName, setProductName] = useState('')
  const [details, setDetails] = useState('')
  const [loading, setLoading] = useState(false);

  const handleDetails = async (event) => {
      event.preventDefault()
      //making call to Ai
      setLoading(true);
      
    try {
        const result = await fetchResponse(productName);
        setDetails(result);
      } catch (err) {
        setDetails('Error fetching response.');
      } finally {
        setLoading(false);
      }
  }

  return (
    <>
    {loading && (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    )}
    <div className='container'>
      <h1 className='title'>Product Checker</h1>
      <form onSubmit={handleDetails} className='product-form'>

        <div className='form-row'>
          <label htmlFor="productName" className='label'>Product Name</label>
          <input 
          type='text' 
          id='productName' 
          className='input'
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          placeholder="e.g., CeraVe Sunscreen"></input>
        </div>

        <button type='submit' className='button'>Get Details</button>
      </form>
      
      {details && (
  <div className="details-box">
    <div className="details-scroll">
      <p>{details}</p>
      
    </div>
  </div>
)}

    </div>
  
    </>
  )
}

export default App
