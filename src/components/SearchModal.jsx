import {connect} from "react-redux";
function SearchModal({dispatch}) {
  return (
    <>
    <div onClick={()=>{
        dispatch({
            type:"SET_SEARCHMODAL",
            payload:false,
        })
    }} className="modal-container">
        <div onClick={(e)=>e.stopPropagation()} className="modal">
        <div className="modal-body">
            <form action="">
            <input type="search" placeholder="Axtarış" />
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default connect()(SearchModal)