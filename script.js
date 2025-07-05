    function getAdvice() {
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.number').textContent = `#${data.slip.id}`
            document.querySelector('.advice').textContent = `❛❛ ${data.slip.advice} ❜❜`;
        })
        .catch(error => {
          document.getElementById('advice').textContent = 'Error fetching';
          console.error('Error:', error);
        });
    }

    getAdvice();