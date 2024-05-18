import './List.css';

const List = ({ countries }) => {
  return (
    <ul className='List'>
      {
        countries.map(({name}) => (
          <li key={name}>{name}</li>
        ))
      }
    </ul>
  );
};

export default List;