import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

export default function ContactSidebar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'fixed',
        left: 0,
        top: '50%',
        marginLeft: 20,
        transform: 'translate(0%, -50%)'
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
