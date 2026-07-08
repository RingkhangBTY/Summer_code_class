function create_counter(){
    let cnt = 0 ;

    function inc(){
        cnt ++;
        return cnt;
    }

    return inc;
}

let count = create_counter();

console.log(count())
console.log(count())
console.log(count())
