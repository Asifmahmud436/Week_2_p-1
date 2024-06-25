let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const biggest = (arr) => {
    let len = 0;
    let name = '';
    for(let i = 0;i<friends.length;i++){
        if(arr[i].length>len){
            len = arr[i].length;
            name = arr[i];
        }
    }
    return name;
}

const result = biggest(friends);
console.log(result);