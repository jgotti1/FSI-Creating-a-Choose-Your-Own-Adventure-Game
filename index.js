let answer  = window.prompt('Do you head left or right?')
    if(answer==='left') {
     window.alert('Left was a great choice click OK to see more...');
     window.location.replace("left.html");
}
    else if(answer==='right') {
    window.alert('May not have been the best choice, click ok to see more....')
    window.location.replace("right.html");
}
    else {
    window.alert('That is not a choice you dummy!');
    window.location.replace("huggy.html");
    
}