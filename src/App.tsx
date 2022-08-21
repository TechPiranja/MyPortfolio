import { Box, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import Fade from 'react-reveal/Fade';
import React, { useRef } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import anja from './assets/anja.jpg';
import anjaCrop from './assets/anja-crop.png';
import Lottie from 'lottie-react';
import scroll from './animations/scroll-arrow.json';

function App() {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up('lg'));
  const medium = useMediaQuery(theme.breakpoints.up('md'));
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery('(max-width:760px)');

  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <>
      <Navigation refs={[aboutMeRef, projectsRef]}>
        <Box style={{ width: '100%' }}>
          <div
            ref={aboutMeRef}
            style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
            <Fade left>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    large || medium
                      ? 'repeat(5, 1fr)'
                      : small && !mobile
                      ? 'repeat(2, 1fr)'
                      : 'repeat(1, 1fr)',
                  gridAutoFlow: 'row',
                  rowGap: 20,
                  columnGap: mobile ? 0 : 20,
                  margin: 'auto',
                  maxWidth: large ? 1000 : medium ? 860 : small && !mobile ? 700 : 350
                }}>
                <Typography
                  variant={large ? 'h2' : medium ? 'h2' : small ? 'h3' : 'h3'}
                  style={{
                    marginTop: mobile ? 80 : 0,
                    fontWeight: 'bold',
                    color: 'white',
                    gridRow: 1,
                    gridColumn: large || medium ? '1/3' : '1/3'
                  }}>
                  This is me!
                </Typography>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    borderRadius: 5,
                    gridRow: mobile ? 3 : 2,
                    gridColumn: large || medium ? '1/4' : 1
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography
                      variant={large ? 'h2' : medium ? 'h2' : small ? 'h3' : 'h3'}
                      style={{ fontWeight: 'bold' }}>
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
                    gridRow: mobile ? 4 : 3,
                    gridColumn: large || medium ? '1/4' : mobile ? 1 : '1/3'
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography
                      variant={large ? 'h2' : medium ? 'h2' : small ? 'h3' : 'h3'}
                      style={{ fontWeight: 'bold' }}>
                      Skills
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren.
                    </Typography>
                  </div>
                </Paper>
                <img
                  src={mobile ? anjaCrop : anja}
                  width="100%"
                  style={{
                    gridRow: large || medium ? '2/4' : 2,
                    gridColumn: large || medium ? '4/6' : mobile ? 1 : 2,
                    zIndex: 2,
                    borderRadius: 5
                  }}
                />
              </div>
            </Fade>
          </div>
          <Lottie
            animationData={scroll}
            style={{
              height: small && !mobile ? 80 : mobile ? 0 : 120,
              marginTop: small && !mobile ? -80 : mobile ? 0 : -120,
              color: 'white'
            }}
          />

          <div
            ref={projectsRef}
            style={{
              display: 'flex',
              justifyContent: 'center',
              minHeight: '100vh',
              marginTop: mobile ? 50 : 0
            }}>
            <Fade left>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: mobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
                  gridAutoFlow: 'row',
                  gridGap: 20,
                  margin: 'auto',
                  maxWidth: large ? 1000 : medium ? 860 : small && !mobile ? 700 : 350
                }}>
                <Typography
                  variant={large ? 'h2' : medium ? 'h2' : small ? 'h3' : 'h3'}
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
                    gridRow: mobile ? 3 : 2,
                    gridColumn: mobile ? 1 : 2
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
                    gridRow: mobile ? 4 : 3,
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
                    gridRow: mobile ? 5 : 3,
                    gridColumn: mobile ? 1 : 2
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
