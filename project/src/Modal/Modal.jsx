import React from "react";

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <section className="Modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal_title">Вхід в особистий кабінет</h4>
                </div>
                <div className="modal-body">
                    <form className="form">
                       <input className="login" type="text" placeholder={"Логін"}/>
                        <input className="password" type="text" placeholder={"Пароль"}/>
                        <div>
                        <input className="check_1" type="checkbox" />Запам'ятати мене
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button_modal">Закрити</button>
                    <button onClick={props.onClose} className="button_modal">Вхід</button>
                </div>
            </div>
        </section>
)
}
export default Modal;
