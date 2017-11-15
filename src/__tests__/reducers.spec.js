import reducers from '../rootReducer';

test('USER LOGIN ', () => {
  let state;
  state = reducers(
    { user: {} },
    {
      type: 'USER_LOGGED_IN',
      user: {
        email: 'ericinoti@gmail.com',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWNpbm90aUBnbWFpbC5jb20iLCJpYXQiOjE1MTA2NjgyODR9.H0nwT-9jRYnP6kFogh297meEt5RiF2OhTanrGllnc64'
      }
    }
  );
  expect(state).toEqual({
    user: {
      email: 'ericinoti@gmail.com',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWNpbm90aUBnbWFpbC5jb20iLCJpYXQiOjE1MTA2NjgyODR9.H0nwT-9jRYnP6kFogh297meEt5RiF2OhTanrGllnc64'
    }
  });
});

test('USER LOGOUT', () => {
  let state;
  state = reducers(
    {
      user: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWNpbm90aUBnbWFpbC5jb20iLCJpYXQiOjE1MTA2NjcyMTN9.sNpccm7NUJDTXeJ2aVrzsg_Gjgd-9PWwUfBP1zCz0rU'
      }
    },
    { type: 'USER_LOGGED_OUT' }
  );
  expect(state).toEqual({ user: {} });
});
