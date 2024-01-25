import ListItem from './ListItem';

interface ListProps {
  items: ListItem[]
  removeItem?: (id: string) => void
  editItem?: (id: string) => void
  toggleComplete?: (id: string) => void
}

const List = ({ items, removeItem, editItem, toggleComplete }: ListProps) => (
  <ul className='todo-list'>
    {items.map((item: ListItem) => (
      <ListItem key={item.id} item={item} removeItem={removeItem} editItem={editItem} toggleComplete={toggleComplete} />
    ))}
  </ul>
)

export default List