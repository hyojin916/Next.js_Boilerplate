import axios from 'axios';
import { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

interface ISubmitSignupForm {
  username: string;
  password: string;
}

interface IUser {
  username: string;
}

const Signup = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitSignupForm>();

  const onSubmitSignup: SubmitHandler<ISubmitSignupForm> = async (data) => {
    const res = await axios.post('http://localhost:8001/users', data);
    console.log('signup res', res);
    if (res.status === 201) {
      setIsSignup(true);
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:8001/users');
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='form-container'>
      <form
        onSubmit={handleSubmit(onSubmitSignup)}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}
      >
        <label htmlFor='username'>Email</label>
        <input
          {...register('username')}
          type='username'
          id='username'
          name='username'
          style={{ padding: '3px', marginBottom: '5px' }}
        />

        <label htmlFor='password'>Password</label>
        <input
          {...register('password')}
          type='password'
          id='password'
          name='password'
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

      <div style={{ margin: '10px' }}>
        {users?.map((user) => {
          return <div key={user.username}>{user.username}</div>;
        })}
      </div>
    </div>
  );
};

export default Signup;
