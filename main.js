document.addEventListener('DOMContentLoaded', () => {
  const graphGrid = document.querySelector('.graph-grid');
  
  if (graphGrid) {
    // Generate the commit graph cells
    const totalCells = 15 * 5; // 15 columns, 5 rows
    
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'graph-cell';
      
      // Randomly assign green colors to simulate commits
      const isCommit = Math.random() > 0.6;
      if (isCommit) {
        const intensity = Math.random();
        if (intensity > 0.8) {
          cell.style.backgroundColor = '#39d353'; // high
        } else if (intensity > 0.4) {
          cell.style.backgroundColor = '#26a641'; // medium
        } else {
          cell.style.backgroundColor = '#0e4429'; // low
        }
      }
      
      // Stagger the animation
      cell.style.animationDelay = `${Math.random() * 1.5}s`;
      graphGrid.appendChild(cell);
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
