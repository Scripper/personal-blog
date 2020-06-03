import React from "react"

const socialLinks = [
  { name: 'vk', link: '/' },
  { name: 'inst', link: '/' },
  { name: 'telegram', link: '/' },
  { name: 'linkedin', link: '/' }
];

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          { socialLinks.map(item => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          )) }
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
