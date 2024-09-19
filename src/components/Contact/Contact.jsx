import css from './Contact.module.css'

import { deleteContact } from '../../redux/contactsOps';

import { useDispatch } from 'react-redux';

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const onDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    }

    return (
        <div className={css.contactWrapper}>
            <div className={css.infoWrapper}>
                <p>👤 {name}</p>
                <p>📞 {number}</p>
            </div>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
}

export default Contact