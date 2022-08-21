import { Box, Typography, Paper } from '@mui/material';
import Fade from 'react-reveal/Fade';
import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import anja from './assets/anja.jpg';
import Lottie from 'lottie-react';
import scroll from './animations/scroll-arrow.json';

function App() {
  return (
    <>
      <Navigation>
        <Box style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
            <Fade left>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridAutoFlow: 'row',
                  gridGap: 20,
                  margin: 'auto',
                  maxWidth: 1200
                }}>
                <Typography
                  variant="h2"
                  style={{ fontWeight: 'bold', color: 'white', gridRow: 1, gridColumn: '1/3' }}>
                  Hello World! This is me!
                </Typography>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: 2,
                    gridColumn: '1/3'
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h1" style={{ fontWeight: 'bold' }}>
                      Anja Stricker
                    </Typography>
                    <Typography variant="h4">Full Stack Developer</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </div>
                </Paper>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: 3,
                    gridColumn: '1/3'
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                      Skills
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </div>
                </Paper>
                <img
                  src={anja}
                  width="100%"
                  style={{ gridRow: '2/4', gridColumn: '3/4', zIndex: 2, borderRadius: 5 }}
                />
              </div>
            </Fade>
          </div>
          <Lottie animationData={scroll} style={{ height: 120, marginTop: -120, color: 'white' }} />

          <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
            <Fade left>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridAutoFlow: 'row',
                  gridGap: 20,
                  margin: 'auto',
                  maxWidth: 1200
                }}>
                <Typography
                  variant="h2"
                  style={{ fontWeight: 'bold', color: 'white', gridRow: 1, gridColumn: '1/2' }}>
                  Projects
                </Typography>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: 2,
                    gridColumn: 1
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                      Project 1
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </div>
                </Paper>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: 2,
                    gridColumn: 2
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                      Project 2
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </div>
                </Paper>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: 3,
                    gridColumn: 1
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                      Project 3
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </div>
                </Paper>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: 3,
                    gridColumn: 2
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                      Project 4
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </Typography>
                  </div>
                </Paper>
              </div>
            </Fade>
          </div>
        </Box>
      </Navigation>
    </>
  );
}

export default App;
