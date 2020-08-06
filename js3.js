function solution(relation) {
    const column = relation[0].length;
    const rows = relation.length;
    const sets = 1 << column;
    const answer = new Set();

    for (let i=1; i<sets; i++) {
        const tmp = new Set();
        for (let row=0; row<rows; row++) {
            let key = '';
            for (let col=0; col<column; col++) {
                if (i & (1 << col)) key = String(key) + String(relation[row][col]);
            }
            tmp.add(key);
        }
        if (tmp.size === rows) answer.add(i);
    }

    for (let i of answer) {
        for (let j of answer) {
            if (i >= j) continue;
            if ((i & j) === i) answer.delete(j);
        }
    }

    return answer.size;
}

console.log('-------------------');
console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));
console.log('-------------------');


