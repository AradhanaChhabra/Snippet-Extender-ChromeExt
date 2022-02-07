import React from 'react';
import ReactDOM from "react-dom";

type Props = {};

const Variables = (props: Props) => {
    return(
        <div className="container">
            HELLO THERE
        <table className="table table-hover">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Variable</th>
                <th scope="col">Value</th>
                <th scope="col"></th>
            </tr>
            </thead>
        </table>
        <div className="modal">
            <div className="modal-content">
                <div className="container">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="key" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="value" rows={8} placeholder="Enter Value Here"></textarea>
                        </div>
                    </form>
                    <button id="edit" type="button" className="btn btn-dark">Save Changes</button>
                    <button id="delete" type="button" className="btn btn-dark">Delete</button>
                    <br/>
                <div id="message">
            </div>
        </div>
    </div>
</div>
</div>)
};

ReactDOM.render(
  <React.StrictMode>
    <Variables/>
  </React.StrictMode>,
  document.getElementById("editRoot")
);