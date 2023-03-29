import React, { Component } from 'react'
import { Accordion, Card, Container } from 'react-bootstrap'
import { Grid, Icon, Segment, Statistic } from 'semantic-ui-react'
import { movieApi } from '../misc/MovieApi'
import { handleLogError } from '../misc/Helpers'
import "../styles/settings.css"
import 'semantic-ui-css/semantic.min.css'
class Home extends Component {
  state = {
    numberOfUsers: 0,
    numberOfMovies: 0,
    isLoading: false
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      let response = await movieApi.numberOfUsers()
      const numberOfUsers = response.data

      response = await movieApi.numberOfMovies()
      const numberOfMovies = response.data

      this.setState({ numberOfUsers, numberOfMovies })
    } catch (error) {
      handleLogError(error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <>
          <div class="flex justify-center items-center h-screen">
            <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
            </div>
          </div>

        </>
      )
    } else {
      const { numberOfUsers, numberOfMovies } = this.state
      return (
        <div className='homeh'>
          <Container text className="me-auto, center-navbar p-5 mb-4 ">


            <Card style={{ width: '20rem' }} className='center-navbar p-4 mb-4 '>
              <Card.Img variant="top" src='https://mdbootstrap.com/img/new/fluid/city/055.webp' />
              <Card.Body>
                <Card.Title>My Devloper Card</Card.Title>
                <Card.Text>
                  Hello to my first Movie WebSite here i going show you how my site looks and functions in the site.
                  I using react js for Fronted and Spring for backend
                </Card.Text>
              </Card.Body>
            </Card>

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Register for more </Accordion.Header>
                <Accordion.Body>
                  Hello to my webSite for more content Register to my webSite on <a href="/signup" className='hs'>Sign Up! </a> <span style={{ color: "red" }}>  Or  </span><a href="/login" className='hl'>Login! </a> if you have account.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Story </Accordion.Header>
                <Accordion.Body>
                  My name: is Vladimir Orlov
                  I live in Israel and city Yavne
                  I 24 year old
                  I fullStuck devloper and using react js for Fronted and spring boot for server.
                  I also know Python and beginner devloper in Android Studio for devlop apps for Android.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Info </Accordion.Header>
                <Accordion.Body>
                  This Web-movie-site is writed on react.js and spring bootstrap with  semantic-ui-react for make its more easy to write and faster hope you liked.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>



            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Segment color='purple'>
                    <Statistic>
                      <Statistic.Value><Icon name='user' color='grey' />{numberOfUsers}</Statistic.Value>
                      <Statistic.Label>Users</Statistic.Label>
                    </Statistic>
                  </Segment>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Segment color='purple'>
                    <Statistic>
                      <Statistic.Value><Icon name='laptop' color='grey' />{numberOfMovies}</Statistic.Value>
                      <Statistic.Label>Movies</Statistic.Label>
                    </Statistic>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>


          </Container>
        </div>
      )
    }
  }
}

export default Home
