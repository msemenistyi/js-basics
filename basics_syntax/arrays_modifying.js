var ar = [3,5];

ar.push(10); // adding el to the end
ar.push(-5, 20, -2);  // adding several els
ar.pop(); 

var str = ar.join(' + '); // gathering all the els separated with char into string

ar.reverse(); // reversing order of els

var secAr = [-3, -5];
ar = ar.concat(secAr); // adding els to the end

delete ar[4]; // assign el with index 4 to undefined