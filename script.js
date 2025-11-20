//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('ip').value);
    const outputDiv = document.getElementById('output');
    
    // Validate input
    if (isNaN(inputNumber)) {
        outputDiv.textContent = "Please enter a valid number";
        return;
    }
    
    // Clear previous output
    outputDiv.textContent = "Processing...";
    
    // Promise Chain
    new Promise((resolve) => {
        // Step 1: Display original number after 2 seconds
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputNumber}`;
            resolve(inputNumber);
        }, 2000);
    })
    .then((number) => {
        return new Promise((resolve) => {
            // Step 2: Multiply by 2 after 2 seconds
            setTimeout(() => {
                const result = number * 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })
    .then((number) => {
        return new Promise((resolve) => {
            // Step 3: Subtract 3 after 1 second
            setTimeout(() => {
                const result = number - 3;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((number) => {
        return new Promise((resolve) => {
            // Step 4: Divide by 2 after 1 second
            setTimeout(() => {
                const result = number / 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((number) => {
        return new Promise((resolve) => {
            // Step 5: Add 10 after 1 second
            setTimeout(() => {
                const result = number + 10;
                outputDiv.textContent = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .catch((error) => {
        outputDiv.textContent = `Error: ${error}`;
    });
});