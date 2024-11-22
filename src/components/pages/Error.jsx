import { Link } from 'react-router';

function Error() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='h-[60vh] flex flex-col gap-14 items-center justify-around'>
        <h1>Oops! Something went wrong.</h1>
        <p>The page you are looking for does not seem to exist.</p>
        <Link className='px-3 py-1 bg-slate-800 rounded-full' to="/">Go back to Homepage</Link>
      </div>
    </div>
  );
}

export default Error;
