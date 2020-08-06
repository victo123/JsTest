
function solution(record) {
  var answers = [];
  var logs = [];
  const users = {};

  const hasValidState = state => {
    const states = ['Enter', 'Leave', 'Change'];
    return states.indexOf(state) > -1;
  };

  const hasValidUid = uid => {
    return 1 <= uid.length && uid.length <= 10;
  };

  const hasValidNickname = nickname => {
    return 1 <= nickname.length && nickname.length <= 10;
  };

  record.forEach(recordItem => {
    const [state, uid, nickname] = recordItem.split(' ');

    if (hasValidState(state) && hasValidUid(uid)) {

      if (state !== 'Leave' && hasValidNickname(nickname)) {
        users[uid] = nickname;
      }
      logs.push({ uid, state });
    }
  });

  for (const log of logs) {
    if (log.state !== 'Change') {
      answers.push(
        `${users[log.uid]} ${log.state === 'Enter' ? 'came in.' : 'has left.'}`
      );
    }
  }

  return answers;
}

console.log('-------------------');
var data = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(data));
console.log('-------------------');


