import React, { useState } from 'react';

const ObfuscatedEmail = ({ email, className = "" }) => {
  const [revealed, setRevealed] = useState(false);
  
  // Obfuscate email by encoding
  const obfuscate = (str) => {
    return btoa(str); // Base64 encode
  };
  
  const deobfuscate = (str) => {
    return atob(str); // Base64 decode
  };
  
  // Store encoded email
  const encodedEmail = obfuscate(email);
  
  const handleClick = (e) => {
    e.preventDefault();
    setRevealed(true);
    const decodedEmail = deobfuscate(encodedEmail);
    window.location.href = `mailto:${decodedEmail}`;
  };
  
  // Display obfuscated version
  const displayEmail = () => {
    if (revealed) {
      return email;
    }
    // Replace @ and . to prevent easy harvesting
    return email.replace('@', ' [at] ').replace(/\./g, ' [dot] ');
  };
  
  return (
    <a
      href="#"
      onClick={handleClick}
      className={`block hover:text-blue-700 ${className}`}
      data-email={encodedEmail}
      aria-label="Email contact"
    >
      {displayEmail()}
    </a>
  );
};

export default ObfuscatedEmail;
