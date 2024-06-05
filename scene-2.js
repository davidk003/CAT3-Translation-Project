
// doorurl = 'https://as1.ftcdn.net/v2/jpg/00/94/17/44/1000_F_94174424_OhcXE9NhW0rOaFTStC2t1fQkvxSamgy1.jpg'

function startScene2()
{
    document.getElementById('poem').textContent = SCENE2TEXT;
}

function cleanupScene2()
{
    
}


document.addEventListener('mousemove', function(event) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const distanceX = Math.abs(event.clientX - centerX);
    const distanceY = Math.abs(event.clientY - centerY);

    const maxDistanceX = window.innerWidth / 2;
    const maxDistanceY = window.innerHeight / 2;

    const proximityX = 1 - (distanceX / maxDistanceX);
    const proximityY = 1 - (distanceY / maxDistanceY);

    const proximity = Math.min(proximityX, proximityY);

    const leftDoor = document.getElementById('left-door');
    const rightDoor = document.getElementById('right-door');

    if (proximity > 0.5) {
        leftDoor.style.transform = 'translateX(-50vw)';
        rightDoor.style.transform = 'translateX(50vw)';
    } else {
        leftDoor.style.transform = 'translateX(0)';
        rightDoor.style.transform = 'translateX(0)';
    }
});
