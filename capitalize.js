function capitalize(string) {
    if (string.length > 0) {
        return string[0].toUpperCase()+string.slice(1).toLowerCase();
    } else return "";    
}

export default capitalize