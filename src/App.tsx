import { Box, Typography, Paper } from '@mui/material';
import Fade from 'react-reveal/Fade';
import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import anja from './assets/anja.jpg';

function App() {
  return (
    <>
      <Navigation>
        <Box style={{ width: '100%' }}>
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
              <Paper
                elevation={0}
                style={{
                  margin: 'auto',
                  background: '#fff',
                  height: '100%',
                  borderRadius: 5,
                  gridRow: 1,
                  gridColumn: '1/3'
                }}>
                <div style={{ margin: 20 }}>
                  <Typography variant="h1" style={{ fontWeight: 'bold' }}>
                    Anja Stricker
                  </Typography>
                  <Typography variant="h4">Full Stack Developer</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                  gridColumn: '1/3'
                }}>
                <div style={{ margin: 20 }}>
                  <Typography variant="h2" style={{ fontWeight: 'bold' }}>
                    Skills
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Typography>
                </div>
              </Paper>
              <img
                src={anja}
                width="100%"
                style={{ gridRow: '1/3', gridColumn: '3/3', zIndex: 2, borderRadius: 5 }}
              />
            </div>
          </Fade>
        </Box>
      </Navigation>
    </>
  );
}

export default App;
