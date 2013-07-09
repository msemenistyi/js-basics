var ar = [3, 5, -10, 6, 20, -10];

ar.slice(1); // returns els starting from index 1 to the end 
ar.slice(2,4); // returns els starting from index 2 to index 4 
ar.slice(-2); // returns els starting from index 2 from the end

ar.splice(2,1); // removes 1 els starting from position 2. returns them
ar.splice(1,2, 'new one'); // removes 2 els starting from position 1. returns them. inserts 'new one' into the position 1
ar.splice(1,0, 'newbie'); // removes 0 els starting from position 1. returns []. inserts 'newbie' into position 1

ar.shift(); // removes el from the start
ar.unshift(5); // adds new el to the start
ar.unshift(4, -5, 7); // adds several els to the start
ar.unshift(); // does nothing