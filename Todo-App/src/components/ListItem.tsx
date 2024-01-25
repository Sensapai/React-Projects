import { FaEdit, FaTrash } from 'react-icons/fa';

interface ListItem {
    id: string
    title: string
    isCompleted: boolean
}

interface ListItemProps {
    item: ListItem
    removeItem?: (id: string) => void
    editItem?: (id: string) => void
    toggleComplete?: (id: string) => void
}

const ListItem = ({ item, removeItem, editItem, toggleComplete }: ListItemProps) => (
    <li key={item.id} className="todo-item">
        <span className={` ${item.isCompleted ? 'completed' : ''}`} style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }} onClick={() => toggleComplete && toggleComplete(item.id)}>
            {item.title}
        </span>
        <div className="btn-container">
            <button type="button" className="edit-btn" onClick={() => editItem && editItem(item.id)}>
                <FaEdit />
            </button>
            <button type="button" className="delete-btn" onClick={() => removeItem && removeItem(item.id)}>
                <FaTrash />
            </button>
        </div>
    </li>
)

export default ListItem