document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.getElementById('carouselExample');

    carrusel.addEventListener('mouseover', function() {
      carrusel.style.transform = 'scale(1.1)';
      carrusel.style.transition = 'transform 0.3s ease';
    });

    carrusel.addEventListener('mouseout', function() {
      carrusel.style.transform = 'scale(1)';
    });
  });

  