import { Box, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import Fade from 'react-reveal/Fade';
import React, { useRef } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import anja from './assets/anja.jpg';
import anjaCrop from './assets/anja-crop.png';
import anjaSide from './assets/anja-side.jpg';
import anjaSideCrop from './assets/anja-side-crop.jpg';
import Lottie from 'lottie-react';
import scroll from './animations/scroll-arrow.json';
import mail from './animations/mail.json';
import react from './assets/react.png';
import csharp from './assets/Csharp-logo.png';
import docker from './assets/docker.png';
import aspnet from './assets/aspnet.png';
import nodejs from './assets/nodejs.png';

function App() {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up('lg'));
  const medium = useMediaQuery(theme.breakpoints.up('md'));
  const small = useMediaQuery(theme.breakpoints.up('sm'));
  const mobile = useMediaQuery('(max-width:760px)');

  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navigation refs={[aboutMeRef, projectsRef, contactRef]}>
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
                  <div style={{ margin: 20, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Typography
                      variant={large ? 'h2' : medium ? 'h2' : small ? 'h3' : 'h3'}
                      style={{ fontWeight: 'bold' }}>
                      Anja Stricker
                    </Typography>
                    <Typography variant="h4" style={{ marginBottom: 20 }}>
                      Full Stack Developer
                    </Typography>
                    <Typography>
                      I am a passionate developer and I am constantly learning on my own.
                    </Typography>
                    <Typography>
                      I am primarily focused on web and app development with React and React Native.
                      Thanks to my creativity, I also develop appealing UI designs.
                    </Typography>
                  </div>
                </Paper>
                <Paper
                  elevation={0}
                  style={{
                    margin: 'auto',
                    background: '#fff',
                    height: '100%',
                    width: '100%',
                    borderRadius: 5,
                    gridRow: mobile ? 4 : 3,
                    gridColumn: large || medium ? '1/4' : mobile ? 1 : '1/3'
                  }}>
                  <div style={{ margin: 20 }}>
                    <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                      Skills
                    </Typography>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <img
                        src={react}
                        height="50"
                        style={{
                          border: '2px solid #f5c7a9',
                          borderRadius: 10,
                          padding: 10
                        }}
                      />
                      <img
                        src={csharp}
                        height="50"
                        style={{
                          border: '2px solid #f5c7a9',
                          borderRadius: 10,
                          padding: 10
                        }}
                      />
                      <img
                        src={docker}
                        height="50"
                        style={{
                          border: '2px solid #f5c7a9',
                          borderRadius: 10,
                          padding: 10
                        }}
                      />
                      <img
                        src={aspnet}
                        height="50"
                        style={{
                          border: '2px solid #f5c7a9',
                          borderRadius: 10,
                          padding: 10
                        }}
                      />
                      <img
                        src={nodejs}
                        height="50"
                        style={{
                          border: '2px solid #f5c7a9',
                          borderRadius: 10,
                          padding: 10
                        }}
                      />
                    </div>
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
          <div
            ref={contactRef}
            style={{
              display: 'flex',
              justifyContent: 'center',
              minHeight: '100vh',
              marginTop: mobile ? 50 : 0,
              marginBottom: mobile ? 50 : 0
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
                  Contact
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
                  <div
                    style={{
                      margin: 20,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                      Get in touch!
                    </Typography>
                    <Typography style={{ marginTop: 20, marginBottom: 20 }}>
                      Feel free to contact me for any new oppurtunities or interesting projects! I
                      will try my best to get back to you asap!
                    </Typography>

                    <div
                      style={{ width: '100%' }}
                      className="btn btn-three"
                      onClick={() =>
                        (location.href = 'mailto:anja.stricker@icloud.com?subject=Hi Anja')
                      }>
                      <span>Contact me</span>
                    </div>
                    <Lottie
                      animationData={mail}
                      style={{
                        height: '100%',
                        marginBottom: 20
                      }}
                    />
                  </div>
                </Paper>
                <img
                  src={mobile ? anjaSideCrop : anjaSide}
                  width="100%"
                  style={{
                    gridRow: mobile ? 3 : 2,
                    gridColumn: mobile ? 1 : 2,
                    zIndex: 2,
                    borderRadius: 5
                  }}
                />
              </div>
            </Fade>
          </div>
        </Box>
      </Navigation>
    </>
  );
}

export default App;
