
// METHOD 1 :

// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//     <div class="key">
//         ${e.key===' ' ? 'Space' : e.key}  // CHECK FOR SPACE
//         <p>e.key</p>
//     </div>
//     <div class="key">
//         ${e.keyCode}
//         <p>e.keyCode</p>
//     </div>
//     <div class="key">
//         ${e.code}
//         <p>e.code</p>
//     </div>

//     `
// });


// METHOD 2: USING FUNCTIONS AND OBJECTS


function showkeyCodes(e){

    const insert = document.getElementById('insert');
    insert.innerHTML = ' ';

    const keyCodes = {
        'e.key' : e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code':e.code,
    };

    for(key in keyCodes){

        const keyText = document.createTextNode(key);
        const value = document.createTextNode(keyCodes[key]);

        const div = document.createElement('div');
        div.className = 'key';
        const para = document.createElement('p');

        para.appendChild(keyText);
        div.appendChild(value);
        div.appendChild(para);

        insert.appendChild(div); 


    }
}



window.addEventListener('keydown' , showkeyCodes);



