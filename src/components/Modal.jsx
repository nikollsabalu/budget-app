import {useState, useEffect} from 'react'
import CloseBtn from '../public/close.svg'

export const Modal = ({setModal,
                        animateModal,
                        setAnimateModal,
                        saveExpense,
                        editExpense,
                        setEditExpense}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if( Object.keys(editExpense).length > 0){
            setName(editExpense.name)
            setAmount(editExpense.amount)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)
        }

    }, [])

    const hideModal = () => {
        setAnimateModal(false);
        setEditExpense({});
        setModal(false);    
    }
        
    const handleSubmit = e => {
        e.preventDefault();

        if([name, amount, category].includes('')){
            setMessage('Todos los campos son obligatorios');
            return;
            
        }
        saveExpense({name, amount, category, id, date})
        hideModal();
    }

  return (
    <div className='modal'>
        <div className='close-modal'>
            <img src={CloseBtn} alt="Close modal" onClick={hideModal} />
        </div>

        <form className={`container shadow form ${animateModal ? 'animar': ''}`}>
            <legend>{editExpense.name ? 'Edit transaction' : 'New transaction'}</legend>

            {message && <message tipo="error"> { message }</message>}
            <div className='campo'>
                <label htmlFor="name">Description:</label>
                <input  id="name"
                        type="text" 
                        placeholder='Example: Supermarket'
                        value={name}
                        onChange={e =>{setName(e.target.value) }}
                />
            </div>

            <div className='campo'>
                <label htmlFor="amount">Amount:</label>
                <input  id="amount"
                        type="number" 
                        placeholder='Example: $25.00'
                        value={amount}
                        onChange={e =>{setAmount(Number(e.target.value)) }}
                />
            </div>

            <div className='campo'>
                <label htmlFor="category">Category:</label>
                <select id="category"
                        value={category}
                        onChange={e =>{setCategory(e.target.value) }}>
                    <option value="">--Select a category</option>
                    <option value="saving">Saving</option>
                    <option value="payments">Payments</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                    <option value="shopping">Shopping</option>
                    <option value="online">Online</option>
                    
                </select>
            </div>

            <input type="submit" value={editExpense.name ? 'Save changes' : 'Add expense'} onClick={handleSubmit}/>


        </form>
    </div>
  )
}
