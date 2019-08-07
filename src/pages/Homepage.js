import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card, CardBody, CardHeader } from 'reactstrap'
import FullPageLoader from '../components/FullPageLoader'
import { Link } from 'react-router-dom'
import UserImages from '../containers/UserImages'

const UsersContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
`

const UserCard = styled(Card)`
  width: 900px;
  margin: 0.8em 0.6em;
`

const UserCardHeader = styled(CardHeader)`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 70px;
    
  }

  .title {
    margin-left: 1em;
    font-size: 0.8em;

    .username {
      font-weight: 900;
    }
  }
`

class HomePage extends React.Component {
  state = {
    users: [],
    loading: false
  }

  componentDidMount() {
    axios
      .get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        this.setState({ users: result.data, loading: false })
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })
  }

  render() {
    const { users, loading } = this.state

    return (
      <>
        {loading ? (
          <FullPageLoader />
        ) : (
          <UsersContainer>
            {users.map(user => (
              <UserCard key={user.id}>
                <UserCardHeader>
                  <img src={user.profileImage} alt={user.username} />
                  <div className="title">
                    <div className="text-muted">{user.id}</div>
                    <Link to={`/users/${user.id}`} className="username">
                      {user.username}
                    </Link>
                  </div>
                </UserCardHeader>
                <CardBody>
                  <UserImages userId={user.id} />
                </CardBody>
              </UserCard>
            ))}
          </UsersContainer>
        )}
      </>
    )
  }
}

export default HomePage
