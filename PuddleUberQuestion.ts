function canPuddle(arr, start) {
    for (i = start + 1; i < arr.length; i++) {      // This function verifies that there is another point in the ground
        if (arr[i] >= arr[start]) return true;      // which is as high as the starting point, so it can therefore form a puddle
    }                                               // without the water falling out
    return false
}


function capacity(arr) {
    let water = 0;
    let visited = [];
    let highest;
    let j;
    for (i = 0; i < arr.length; i++) visited[i] = false     // Creates a table for making sure we don't go through visited values again
    for (k = 0; k < arr.length; k++) {
        if (arr[k] > arr[k + 1] && !visited[k]) {
            highest = arr[k];                               // Declares the point of puddle start as the highest point on the puddle
            j = k + 1;                //declaring j as the starting value for the while loop
            if (canPuddle(arr, k)) {
                while (arr[j] < highest) {
                    if (arr[j] < highest) {
                        water += (highest - arr[j]);        // The amount of water added is highest point in the puddle minus the current depth of the puddle
                        visited[j] = true                   // This node is now visited, so we don't need to check it ever again
                        j++
                    };
                };
            };
        };
    };
    return water;
};

console.log(capacity([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));  // 6