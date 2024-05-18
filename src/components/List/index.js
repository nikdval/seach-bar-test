import './List.css';

const List = ({ countries }) => {
  return (
    <ul className='List'>
      {
        countries.map(({name}) => (
          <li>{name}</li>
        ))
      }
      <li>Test</li>
    </ul>
  );
};

export default List;