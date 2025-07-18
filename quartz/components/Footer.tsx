import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "2rem" }}>
      <div style={{ display: "inline-flex", gap: "1.5rem", fontSize: "1.5rem" }}>
        <a href="https://github.com/yourusername" aria-label="GitHub"><FaGithub /></a>
        <a href="https://twitter.com/yourusername" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </footer>
  );
}
