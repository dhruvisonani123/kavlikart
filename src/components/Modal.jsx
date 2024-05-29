import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import "../styles/Modal.css";
import modal from "../images/modal.png";
import Button from './Button';

const Modal = ({ onclose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'modal-overlay') {
        onclose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onclose]);

  return (
    <div id="modal-overlay" style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onclose} style={styles.closeButton}><X /></button>
        <div style={styles.content}>
          <img src={modal} alt="Modal" style={styles.image} />
          <div className='modal-txt'>
          <h1>Bilona Ghee</h1>
          <p className='bilona-p'>₹1,798(1000ml)</p>
          <p><span>Bilona Ghee:</span> Kavlikart Desi Gir Cow A2 Bilona Ghee is full of nutritive fatty acids, an ideal fat source for the Indian diet. Its regular consumption enhances physical and mental strength for a balanced and active lifestyle. It keeps the body healthy and increases the potency of the body, bilona ghee 1 litre</p>
          <p><span>100% Pure & Natural: </span>Absolutely free from additives, preservatives, and artificial flavors, providing you with the goodness of pure, unadulterated ghee. Packed with essential nutrients and healthy fats, this ghee is known for its potential health benefits, supporting digestion, contains anti-inflammatory properties, immunity, and overall well-being.</p>
          <p><span>Packaging:</span> Encased in a 1000ml glass jar, the packaging not only preserves the freshness of the ghee but also reflects Kavlikart dedication to sustainability and ensures an authentic experience of this liquid gold, gir cow ghee 1kg</p>
          <p><span>Milk Source:</span> Kavlikart Pure Gir Cow Fresh A2 Ghee is made from milk collected from grass-fed desi Gir cows. Grazing upon medicinal grasses in pastures makes the milk of desi Gir cows’ nectar. Now this nectar gives us the best of Bilona Ghee 1 litre</p>
          <p><span>Traditional Method:</span> Gir Cow Ghee made from bilona process, Crafted using the traditional Bilona method, ensuring the purest and most authentic ghee production, Involves churning curd obtained from cow's milk to extract butter. Milk quality is crucial for the rich flavor and nutritional benefits, desi cow bilona ghee</p>
          <p><span>Cultural Significance:</span> Deeply rooted in Indian culture and Ayurveda for its health benefits. Considered sacred in certain rituals and ceremonies, growing popularity due to the increasing demand for traditional and authentic food products. Consumers seeking natural and unprocessed alternatives, a2 cow desi ghee</p>
          <p><span>Aroma Flavor:</span> Has a distinct and rich aroma due to the traditional method of preparation. Offers a unique, nutty, and wholesome flavor. Butter obtained is clarified through a slow and careful heating process. Boiled at a low temperature to retain the nutritional components.</p>
          <p><span>Recommend Usage:</span> 1 spoon on daily basis</p>
          <p>Our A2 bilona Desi Ghee is best stored in a cool and dry place with the lid tightly closed, danedar ghee</p>
          <p>No Added Color and Preservatives, No Added Fragrance, 100% Naturally obtained Ghee</p>
          </div>
          <div className="modal-button">
      <Button text={"Buy Now"}/>
      </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
  },
  content: {
    maxHeight: '80vh',
    overflowY: 'auto',
    textAlign: 'justify',
  },
  image: {
    display: 'block',
    margin: '0 auto 20px',
    maxWidth: '100%',
    height: 'auto',
    // padding:'20px 0'
  },
};

export default Modal;
