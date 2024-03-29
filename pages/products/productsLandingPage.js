import React from 'react';
import Link from 'next/link';
import Layout from '/layouts/layout';

const ProjectsLandingPage = () => {
  return (
    <Layout>
      <style jsx global>{`
        .project-links {
          position: absolute;
          top: 20%;
          right: 5%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 15px;
        }

        .project-link {
          position: relative;
          width: 200px;
          height: 200px;
          background-color: #e0e0e0;
          border-radius: 10px;
          background-size: cover;
          overflow: hidden;
          cursor: pointer; /* Add pointer cursor for the clickable effect */
        }

        .project-link img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
        }

        .project-link-text-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          text-align: center;
          padding: 10px; /* Adjust as needed for spacing between icon and text */
          background: rgba(255, 255, 255, 0.8); /* Add a semi-transparent background for better readability */
        }

        .project-link-text {
          color: #333;
          font-weight: bold;
        }
      `}</style>

      <div className="project-links">
        <Link href="/products/furniture/products">
          <div className="project-link" style={{ backgroundImage: 'url(/furnitureIcon.png)' }}>
            <div className="project-link-text-container">
              <div className="project-link-text">Muebles</div>
            </div>
          </div>
        </Link>

        <Link href="/products/decoration/products">
          <div className="project-link" style={{ backgroundImage: 'url(/decorationIcon.jpg)' }}>
            <div className="project-link-text-container">
              <div className="project-link-text">Decoracion</div>
            </div>
          </div>
        </Link>
{/*  
        <Link href="/products/concepts/products">
          <div className="project-link" style={{ backgroundImage: 'url(/conceptos-icon.png)' }}>
            <div className="project-link-text-container">
              <div className="project-link-text">Conceptos</div>
            </div>
          </div>
        </Link>
        */}
      </div>
    </Layout>
  );
};


export default ProjectsLandingPage;

