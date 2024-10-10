function FormGroup ({formlabel}){
    return(
        <div class="form-group">
     <label for={formlabel.name}>{formlabel.name}</label>
                    <input type={formlabel.type} class="form-control" id={formlabel.name} placeholder={formlabel.placeholder}/>
                    <span id={formlabel.error} class="error-message"></span>
                </div>
    );
}
export default FormGroup;