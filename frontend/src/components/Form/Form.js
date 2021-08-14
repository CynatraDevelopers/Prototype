const Form = ({lists}) => {
    return (
        <div className="form">
            {lists.map(list => (
                <div className="formInput row">
                    <label>{list.description}</label>
                    <input type={list.type} placeholder={list.placeholder} value={list.value} onChange={event => list.setValue(event.target.value)} />
                </div>
            ))}
        </div>
    );
}
 
export default Form;