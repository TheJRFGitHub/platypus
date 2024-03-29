import React, { useState, useEffect, useRef } from 'react';
import Layout from '/layouts/layout';
import Tooltip from '/layouts/tooltip';
import 'layouts/carouselAbout.css';

const About = () => {

  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isTooltipVisible, setTooltipVisibility] = useState(false);

  const handleTooltip = (sentences, event) => {
    const yOffset = 1800;
    const xOffset = 20;
  
    setTooltipText(sentences);
    setTooltipPosition({
      top: event.clientY + yOffset,
      left: event.clientX + xOffset,
    });
    setTooltipVisibility(true);
  };

  const handleTooltipClose = () => {
    setTooltipVisibility(false);
  };

  const handleConocenosClick = () => {
    // Specify the position you want to scroll to (adjust the value as needed)
    const scrollPosition = 800; // Replace with your desired position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth', // Use smooth scrolling
    });
  };
  
  const plans = [
    {
      title: 'Plan A',
      jsx: (
        <>
          <p style={{fontSize:'25px'}}>Plan A</p>
          <p style={{fontSize:'18px'}}>Proyecto visual</p>
          <p style={{fontSize:'13px'}}>- Planta de distribucion</p>
          <p style={{fontSize:'13px'}}>- Imagenes de referencia</p>
          <p style={{fontSize:'13px'}}>- Moodboard</p>
          <p style={{fontSize:'13px'}}>- Renders</p>
          <p style={{fontSize:'13px'}}>- Seleccion de mobiliario e interiores</p>
        </>
      ),
    },
    {
      title: 'Plan B',
      jsx: (
        <>
          <p style={{fontSize:'25px'}}>Plan B</p>
          <p style={{fontSize:'18px'}}>Proyecto mobiliario</p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Incluye:\n- Todo lo que incluye Plan A', e)}
            onMouseOut={handleTooltipClose}
          >
            - Proyecto visual
          </p>
         
          <p style={{fontSize:'13px'}}></p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Incluye:\n- Seleccion de colores y texturas\n- Seleccion de mobiliario\n- Ambientacion\n- Iluminacion', e)}
            onMouseOut={handleTooltipClose}
          >
            - Decoracion de interiores
          </p>
          <p style={{fontSize:'13px'}}>- Mano de obra</p>
          <p style={{fontSize:'13px'}}>- Flete</p>
          <p style={{fontSize:'13px'}}>- Instalacion</p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Supervision a cargo de un arquitecto o ingeniero calificado', e)}
            onMouseOut={handleTooltipClose}
          >
            - Supervision
          </p>
          <p style={{fontSize:'13px'}}>- Entrega final al cliente</p>
          
        </>
      ),
    },
    {
      title: 'Plan C',
      jsx: (
        <>
          <p style={{fontSize:'25px'}}>Plan C</p>
          <p style={{fontSize:'18px'}}>Ejecucion de proyecto</p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Incluye:\n- Todo lo que incluye Plan A\n- Se descuenta el precio del proyecto visual!', e)}
            onMouseOut={handleTooltipClose}
          >
            - Proyecto visual
          </p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Incluye:\n- Seleccion de colores y texturas\n- Seleccion de mobiliario\n- Ambientacion\n- Iluminacion', e)}
            onMouseOut={handleTooltipClose}
          >
            - Decoracion de interiores
          </p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Incluye:\n- Diseno de espacios\n- Colocacion pisos\n- Paredes, tapices y pintura', e)}
            onMouseOut={handleTooltipClose}
          >
            - Diseno de interiores
          </p>
          <p style={{fontSize:'13px'}}>- Mobiliario a la medida</p>
          <p style={{fontSize:'13px'}}>- Mano de obra</p>
          <p style={{fontSize:'13px'}}>- Flete</p>
          <p style={{fontSize:'13px'}}>- Instalacion</p>
          <p
            style={{ fontSize: '13px' }}
            className="tooltip"
            onMouseOver={(e) => handleTooltip('Supervision a cargo de un arquitecto o ingeniero calificado', e)}
            onMouseOut={handleTooltipClose}
          >
            - Supervision
          </p>
          <p style={{fontSize:'13px'}}>- Entrega final al cliente</p>
          
        </>
      ),
    },
  ];

  const yourCarouselItems1 = [

    {
      imagePath: '/61.jpeg',
      text: '',
      
    },

    {
      imagePath: '/7a.jpg',
      text: '',
      
    },
 {
      imagePath: '/90.jpeg',
      text: '',
      
    },
    {
      imagePath: '/91.jpeg',
      text: '',
      
    },
    {
      imagePath: '/63.jpeg',
      text: '',
      
    },

    {
      imagePath: '/93.jpeg',
      text: '',
      
    },
    
    {
      imagePath: '/12a.jpg',
      text: '',
      
    },
    {
      imagePath: '/64.jpeg',
      text: '',
      
    },
    {
      imagePath: '/13a.jpg',
      text: '',
      
    },
    {
      imagePath: '/14a.jpg',
      text: '',
      
    },
    
    {
      imagePath: '/16a.jpg',
      text: '',
    
    },
    
    {
      imagePath: '/1a.jpg',
      text: '',
      
    },
    
    {
      imagePath: '/2a.jpg',
      text: '',
      
    },
    {
      imagePath: '/10a.jpg',
      text: '',
      
    },
    
    {
      imagePath: '/15.jpeg',
      text: '',
      
    },
    
    
    
    
    
    /*
   
   
  
    */
    
  ];

  const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    };
  
    return (
      <div className="carousel">
        <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item.imagePath} alt={`Image ${index + 1}`} />
              <div className="carousel-footer">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button type="button" onClick={handlePrev} className="carousel-button prev">
          &lt;
        </button>
        <button type="button" onClick={handleNext} className="carousel-button next">
          &gt;
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <style jsx global>{`
        body {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100vh;
        }

        .big-title {
          font-size: 48px;
          text-align: center;
          color: #000; /* Adjust text color as needed */
          margin-bottom: 20px; /* Add some space below the big title */
        }

        .side-title {
          font-size: 18px;
          text-align: center;
          color: #000; /* Adjust text color as needed */
          margin-bottom: 10px; /* Add some space below the side title */
          cursor: pointer;
           z-index: 2;
        }
        .below-title-undertitle {
          font-size: 18px;
          position: absolute;
          text-align: center;
          color: #333; /* Adjust text color as needed */
          margin-top: 130vh; /* Add 30vh margin above the text */
        }
        .below-title-text {
          font-size: 18px;
          position: absolute;
          text-align: left;
          color: #333; /* Adjust text color as needed */
          margin-top: 190vh; /* Add 30vh margin above the text */
          padding: 40vh;
        }

        .services-text {
          font-size: 26px;
          position: absolute;
          top: 282vh;
          width: 50%;
          overflow: hidden;
          left: 82.2vh;
          padding-bottom: 10vh;
        }

        .services-under-text{
          font-size: 12px;
          position: absolute;
          top: 284vh;
          width: 50%;
          overflow: hidden;
          left: 10vh;
          padding-bottom: 10vh;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 240px; /* Adjust the gap as needed */
          position: absolute;
          top: 298vh;
          width: 90%; /* Adjust the width as needed */
          left: 5%; /* Adjust the left position as needed */
          padding-bottom: 20vh;
        }

        .service-plan {
          text-align: center;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          width: 100%; /* Adjust the width as needed */
          text-align: left;
        }

      `}</style>
      <div>
      <div className="big-title">
        Nuestra vision
      </div>

      <div className="side-title" onClick={handleConocenosClick}>
        Conocenos!
      </div>
        </div>
      <div className="below-title-undertitle">
      SOBRE NOSOTROS
      </div>
      
      <div className="below-title-text">
      <p style={{marginTop: '150px'}}>
      JJ Conceptos, es un taller de remodelación e interiorismo basado en Mexico pero que busca siempre tomar en cuenta una visión internacional.  
      </p>
      <p style={{marginTop: '30px'}}>
     
      Con especialidad en mobiliario a la medida, JJ Conceptos nace como eso, un taller de muebles. En 2021 el arquitecto Juan Pablo Gonzalez y el 
      ingeniero Jaime Rodriguez, se unen con un objetivo:  Al paso del tiempo, y despues de trabajar con 
      diversos clientes, el equipo se amplia y nuestros servicios tambien, para ofrecer soluciones de interiorismo integral que definimos con los sigientes tres pilares:
      Arquitectura, Interiorismo y Branding.
      </p>
      <p style={{marginTop: '30px'}}>
      Nuestro taller mezcla tradicion con innovacion, para presentar al cliente un producto estetico y practico. 
     
      </p>
      <p style={{marginTop: '80px', textAlign: 'left'}}>Conceptos</p>
      </div>
      <div>
      <label >    
      <Carousel items={yourCarouselItems1} />
    </label>
    </div>
<div className="services-text" >
<p>
  Servicios
</p>
</div>
<div className="services-under-text">
<p style={{marginTop: '30px',}}>
  Por favor coloca el mouse encima del servicio que quieras conocer mas a detalle (no todos tienen detalle)
</p>
</div>
<div className="services-container">
        {plans.map((plan, index) => (
          <div key={index} className="service-plan">
            {plan.jsx}
          </div>
        ))}
      </div>

      <div>
        {isTooltipVisible && (
          <Tooltip text={tooltipText} isVisible={isTooltipVisible} top={tooltipPosition.top} left={tooltipPosition.left} />
          
        )}
      </div>
    

    </Layout>
  );
};

export default About;
