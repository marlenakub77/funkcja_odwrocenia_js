function reversedString(str) {

    let splitString = str.split('');
    
    let reversedArray = splitString.reverse('');
    
    let joinArray = reversedArray.join('');
    return joinArray;
    }
    
    console.log(reversedString("Akademia108"))