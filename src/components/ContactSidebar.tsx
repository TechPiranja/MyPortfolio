import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useMediaQuery } from '@mui/material';
import Fade from 'react-reveal/Fade';

export default function ContactSidebar() {
  const mobile = useMediaQuery('(max-width:1000px)');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mobile ? 'row' : 'column',
        gap: 10,
        position: mobile ? 'relative' : 'fixed',
        left: 0,
        bottom: mobile ? 0 : 'auto',
        top: mobile ? 'auto' : '50%',
        marginLeft: mobile ? 0 : 20,
        justifyContent: 'center',
        transform: mobile ? '' : 'translate(0%, -50%)'
      }}>
      <Fade top>
        <a href="https://github.com/TechPiranja">
          <FiGithub size="30" color="white" />
        </a>
        <a href="https://www.instagram.com/techpiranja">
          <FiInstagram size="30" color="white" />
        </a>
        <a href="https://mobile.twitter.com/techpiranja">
          <FiTwitter size="30" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/anja-stricker">
          <FiLinkedin size="30" color="white" />
        </a>
      </Fade>
    </div>
  );
}
