import React from 'react';

const Popup = ({ title, content }) => {
    return (
        <div className="schPopup modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    {title && <div className="modal-header"><h4 className="modal-title">{title}</h4></div>}
                    <div className="modal-body">
                        {content}
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-default btn-wide" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary btn-wide">Add</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default Popup;