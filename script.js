const burger = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.nav-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileNav.classList.toggle('open');

  // Update aria-expanded for accessibility
  const expanded = burger.classList.contains('open');
  burger.setAttribute('aria-expanded', expanded);
  mobileNav.setAttribute('aria-hidden', !expanded);
});
 window.addEventListener('load', () => {
    const images = document.querySelectorAll('.fire-gallery .gallery-grid img');
    
    images.forEach(img => {
      // Calculate how many grid rows to span based on image natural height and width
      
      const rowHeight = 10; // Must match grid-auto-rows in px
      const gap = 10; // Must match gap in px

      // Get natural image dimensions (actual image size)
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      
      // Compute aspect ratio height in terms of base grid rows
      // Formula: (naturalHeight / naturalWidth) * (columnWidth) / rowHeight
      // Since width is 100% of grid column, columnWidth varies but we can approximate by container width / columns

      // To simplify, use image aspect ratio * fixed column width (200px min) to estimate height in px
      const estimatedHeightPx = (naturalHeight / naturalWidth) * 200;
      
      // Calculate span count:
      const rowSpan = Math.ceil((estimatedHeightPx + gap) / (rowHeight + gap));

      // Assign CSS grid row span
      img.style.gridRowEnd = `span ${rowSpan}`;

      // Add random scatter transform
      const rotate = (Math.random() * 20) - 10;
      const translateX = (Math.random() * 16) - 8;
      const translateY = (Math.random() * 16) - 8;

      img.style.setProperty('--rotate', rotate + 'deg');
      img.style.setProperty('--translateX', translateX + 'px');
      img.style.setProperty('--translateY', translateY + 'px');
    });
  });