### Limitations

You can add new users but you can't edit them or delete them.
This is because even **API** is responding okay after `POST`, it does not adding another user.
If there is no such user in **API** I am not allowing to edit / delete only in dashboard.
Every change in dashboard must have reflection in **API** first.
Also if you delete an user and then you want to add another one it is also not allowed because
**API** is responding ok on `DELETE` but this record is still there so we can't `POST` with the same `id` as it is.

TL;DR

1. You can safely edit / delete those users fetched on load
2. You can add new users if you don't delete any user fetched on load

### Functionalities

1. Show all users:

- Id
- Name
- Username
- City
- Email

2. Add & edit users:

- Name
- Email

- All fields can be edited
- Fields are validated
- On submit there is a request to API
- After good response go to home view and show updated user 

3. Delete user:

- Popup after delete icon
- Request to API
- Update users after god response

4. Sorting:

- Sorting on username column
    - ascending
    - descending

### Preview

[LIVE](https://dashboard-users-dawid-zebacki.netlify.app/)

### Install

```bash
git clone https://github.com/dawidzebacki/users-dashboard.git

yarn

yarn start || yarn build
```