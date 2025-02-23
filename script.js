let number = parseInt(prompt("please enter a number"))

for (let i = 1; i <= number; i++) {
    
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log('fizzbuzz');
            continue
        }
        console.log('fizz');
        continue
    }
    
    if (i % 5 === 0) {
        console.log('buzz');
        continue
    }

    console.log(i)
}