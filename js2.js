function solution(N, users) {
	if (N < 1 || N > 500) {
		throw new Error('The total stages should between 1 and 500');
	}
	if (users.length < 1 || users.length > 200000) {
		throw new Error('The total users should between 1 and 200000');
	}
    var answer = [];
    let stageRate = [];
    
    for(let i = 1; i <= N; i++){
      let stage = {
        number: 0,
        rate: 0
      } 
      let numerator = 0;
      let denominator = 0;
         
      for(let j = 0; j < users.length; j++){
        stage.number = i;
        if(i == users[j]){
          numerator++;
          denominator++;
        }else if(i < users[j]){
          denominator++;
        }
      }
      
      if(denominator == 0){

        stage.rate = 0;
      }else{
        stage.rate = numerator/denominator;
      }
        

      stageRate.push(stage);
    }

    stageRate.sort((a,b) => b.rate - a.rate);
    stageRate.forEach(a => answer.push(a.number));
        
    return answer;
}
console.log('-------------------');
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
console.log('-------------------');


