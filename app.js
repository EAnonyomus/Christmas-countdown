var span = document.getElementById('span');

function time() {
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    var present = new Date();
    var christmas_day = new Date(present.getFullYear(), 11, 24,24); // Current year's Christmas

    // Check if Christmas has passed this year
    if (present.getMonth() == 11 && present.getDate() > 25) {
        christmas_day.setFullYear(christmas_day.getFullYear() + 1); // Move to next year's Christmas
    }

    // Calculate the difference between present date and Christmas
    var diff = christmas_day.getTime() - present.getTime();

    let d = Math.floor(diff / day);
    diff %= day;
    let h = Math.floor(diff / hour) ;
    diff %= hour;
    let m = Math.floor(diff / min);
    diff %= min;
    let s = Math.floor(diff / sec);

   
    span.textContent =
        d.toString().padStart(2, '0') + " days " + 
        h.toString().padStart(2, '0') + " hours " + 
        m.toString().padStart(2, '0') + " min " + 
        s.toString().padStart(2, '0') + " sec ";
}

// Update the countdown every second
setInterval(time, 1000);


//
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Create snowflakes
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    
    // Create 100 snowflakes
    for (let i = 0; i < 200; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';  // Snowflake symbol

        // Random size and position for each snowflake
        const size = random(0, 20);  // Snowflake size
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.left = `${random(0, window.innerWidth)}px`;
        snowflake.style.animationDuration = `${random(5, 10)}s`; // Random fall speed
        snowflake.style.opacity = random(0.5, 1); // Random opacity

        // Append the snowflake to the container
        snowContainer.appendChild(snowflake);
    }
}
function applyWindEffect(event) {
    const snowflakes = document.querySelectorAll('.snowflake');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const windRadius = 80; // Radius around the mouse where snowflakes will be affected
    const windStrength = (mouseX / window.innerWidth - 0.5) * 500; // Wind strength based on mouse position

    snowflakes.forEach(snowflake => {
        const snowflakeRect = snowflake.getBoundingClientRect();
        const snowflakeX = snowflakeRect.left + snowflakeRect.width / 2;
        const snowflakeY = snowflakeRect.top + snowflakeRect.height / 2;

        // Calculate the distance between the mouse and the snowflake
        const distance = Math.sqrt(
            Math.pow(snowflakeX - mouseX, 2) + Math.pow(snowflakeY - mouseY, 2)
        );

        // Apply wind effect only if the snowflake is within the wind radius
        if (distance < windRadius) {
            const windEffect = windStrength * (2 - distance / windRadius); // Stronger effect if closer
            snowflake.style.transform = `translateX(${windEffect}px)`; // Move snowflake horizontally
        }
    });
}

// Initialize the snowfall effect
createSnowflakes();

// Add event listener for mouse movement to apply the wind effect
document.addEventListener('mousemove', applyWindEffect);


// Select the heart and the text elements
const heart = document.getElementById('heart');
const giftText = document.getElementById('gift-text');
const text_info=document.getElementById('text-info');

// Add click event listener to the heart
heart.addEventListener('click', function() {
    // Hide the heart
    heart.style.display = 'none';
    
    text_info.style.display='none';
    // Show the gift text
    giftText.style.display = 'block';
    giftText.style.justifyContent='center';
    giftText.style.display='flex';
});

