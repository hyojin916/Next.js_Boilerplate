import axios from 'axios';
import { useEffect } from 'react';

const Signup = () => {
  useEffect(() => {
    const res = axios.get('http://localhost:8001/users');
    console.log('res', res);
  }, []);

  return (
    <div className='form-container'>
      <form
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}
      >
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          required
          style={{ padding: '3px', marginBottom: '5px' }}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          required
          style={{ padding: '3px', marginBottom: '5px' }}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          style={{ padding: '3px', marginBottom: '5px' }}
        />

        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <button
            type='submit'
            style={{
              padding: '3px',
              marginBottom: '5px',
              backgroundColor: 'yellowgreen',
            }}
          >
            회원가입
          </button>
          <button
            type='submit'
            style={{
              padding: '3px',
              marginBottom: '5px',
              backgroundColor: 'yellow',
            }}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
