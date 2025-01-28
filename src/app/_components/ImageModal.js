'use client';

import { useEffect } from 'react';

export function initializeImageModal() {
  // Create modal container if it doesn't exist
  let modalContainer = document.querySelector('.image-modal');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.className = 'image-modal';
    document.body.appendChild(modalContainer);
  }

  // Handle image clicks
  const images = document.querySelectorAll('.markdown img');
  images.forEach(img => {
    img.addEventListener('click', (e) => {
      const modalImg = document.createElement('img');
      modalImg.src = e.target.src;
      modalImg.alt = e.target.alt;

      modalContainer.innerHTML = '';
      modalContainer.appendChild(modalImg);
      modalContainer.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });

  // Close modal when clicking outside the image
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  });

  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
      modalContainer.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

export default function ImageModal() {
  useEffect(() => {
    initializeImageModal();
  }, []);

  return null;
}
