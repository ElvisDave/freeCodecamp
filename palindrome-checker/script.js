document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const result = document.getElementById('result');

  checkBtn.addEventListener('click', function() {
    const text = textInput.value;
    
    if (!text) {
      alert('Please input a value');
      return;
    }
    
    const isPalindrome = checkPalindrome(text);
    
    result.textContent = `${text} is ${isPalindrome ? 'a' : 'not a'} palindrome`;
    result.classList.add('result-visible');
    result.classList.toggle('palindrome', isPalindrome);
    result.classList.toggle('not-palindrome', !isPalindrome);
  });
  
  textInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      checkBtn.click();
    }
  });
  
  /**
   * Function to check if a string is a palindrome
   * @param {string} str - The string to check
   * @returns {boolean} - True if the string is a palindrome, false otherwise
   */
  function checkPalindrome(str) {
    const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
});