import React, { useState } from 'react';
import './Certifications.css';
import j from '../assets/java.jpg'
import webdev from '../assets/webdev.jpg'

const Certifications = () => {
  const [visibleCertificate, setVisibleCertificate] = useState(null);

  const certificates = [
    { id: 1, title: 'Web Development', date: 'Sep 2024', imgSrc: webdev },
    { id: 2, title: 'Java Pragramming' , date: 'Sep 2024', imgSrc: j },
    { id: 3, title: 'Kubernetes for Beginners', date: 'Mar 2024', imgSrc: '/images/kubernetes-certificate.jpg' },
    // Add more certificates with imgSrc
  ];

  const toggleCertificateVisibility = (id) => {
    if (visibleCertificate === id) {
      setVisibleCertificate(null); // Hide certificate if it's already visible
    } else {
      setVisibleCertificate(id); // Show selected certificate
    }
  };

  return (
    <>
    <div className="certifications-container">
      <h2 className="certifications-title">My Certifications</h2>
      <ul className="certifications-list">
        {certificates.map((certificate) => (
          <li key={certificate.id} className="certificate-item">
            <div
              className="certificate-title"
              onClick={() => toggleCertificateVisibility(certificate.id)}
            >
              <h3>{certificate.title}</h3>
              <p>{certificate.date}</p>
            </div>
            {visibleCertificate === certificate.id && (
              <img className="certificate-img"
                src={certificate.imgSrc}
                alt={`${certificate.title} Certificate`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Certifications;
