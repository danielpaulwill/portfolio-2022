import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='center'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </div>
  );
}

export default Error;
