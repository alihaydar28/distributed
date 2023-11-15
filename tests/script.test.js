const {
    gridNumberAndSize,
    erase,
    colorMode,
    clearGrid,
  } = require('../script.js');
  
  test('gridNumberAndSize sets rangeval and rangeText correctly', () => {
    // Mocking the DOM elements
    const range = { value: 20 };
    const rangeText = { textContent: '' };
    const sideRightContainer = document.createElement('div'); // Create a mock element
  
    // Run the function with the mock elements
    gridNumberAndSize(range, rangeText, sideRightContainer);
  
    expect(rangeval).toBe(20);
    expect(rangeText.textContent).toBe('20 x 20');
  });
  