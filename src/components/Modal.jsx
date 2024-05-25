import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ onclose }) => { // Destructure onclose from props
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
          <h1>Bilona Ghee</h1>
          <p>Bilona Ghee: Kavlikart Desi Gir Cow A2 Bilona Ghee is full of nutritive fatty acids, an ideal fat source for the Indian diet. Its regular consumption enhances physical and mental strength for a balanced and active lifestyle. It keeps the body healthy and increases the potency of the body, bilona ghee 1 litre</p>
          Bilona Ghee : Kavlikart Desi Gir Cow A2 Bilona Ghee is full of nutritive fatty acids, an ideal fat source for the Indian diet. Its regular consumption enhances physical and mental strength for a balanced and active lifestyle. It keeps the body healthy and increases the potency of the body, bilona ghee 1 litre
          100% Pure & Natural : Absolutely free from additives, preservatives, and artificial flavors, providing you with the goodness of pure, unadulterated ghee. Packed with essential nutrients and healthy fats, this ghee is known for its potential health benefits, supporting digestion, contains anti-inflammatory properties, immunity, and overall well-being.
          Packaging : Encased in a 1000ml glass jar, the packaging not only preserves the freshness of the ghee but also reflects Kavlikart dedication to sustainability and ensures an authentic experience of this liquid gold, gir cow ghee 1kg
          Milk Source : Kavlikart Pure Gir Cow Fresh A2 Ghee is made from milk collected from grass-fed desi Gir cows. Grazing upon medicinal grasses in pastures makes the milk of desi Gir cows’ nectar. Now this nectar gives us the best of Bilona Ghee 1 litre
          Traditional Method : Gir Cow Ghee made from bilona process, Crafted using the traditional Bilona method, ensuring the purest and most authentic ghee production, Involves churning curd obtained from cow's milk to extract butter. Milk quality is crucial for the rich flavor and nutritional benefits, desi cow bilona ghee
          Cultural Significance : Deeply rooted in Indian culture and Ayurveda for its health benefits. Considered sacred in certain rituals and ceremonies, growing popularity due to the increasing demand for traditional and authentic food products. Consumers seeking natural and unprocessed alternatives, a2 cow desi ghee
          Aroma Flavor : Has a distinct and rich aroma due to the traditional method of preparation. Offers a unique, nutty, and wholesome flavor. Butter obtained is clarified through a slow and careful heating process. Boiled at a low temperature to retain the nutritional components.
          Recommend Usage : 1 spoon on daily basis
          Our A2 bilona Desi Ghee is best stored in a cool and dry place with the lid tightly closed, danedar ghee
          No Added Color and Preservatives, No Added Fragrance, 100% Naturally obtained Ghee
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
  },
  content: {
    maxHeight: '100vh',
    overflowY: 'auto',
    textAlign: 'justify',
  },
};

export default Modal;
