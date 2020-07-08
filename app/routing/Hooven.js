var newArr = []
var newArr2 = []
var compareArr = [];
function compare() {
    newArr = []
    for (var j = 0; j < friendsList[friendsList.length - 1].scores.length; j++) {
        var user1 = friendsList[friendsList.length - 1].scores[j];
        user1 = user1.toString().replace("-", '');
        //credit to micah
        newArr.push(user1)
    }
    for (var i = 0; i < friendsList.length; i++) {
        newArr2 = []
        for (var j = 0; j < friendsList[i].scores.length; j++) {
            var user2 = friendsList[i].scores[j];
            user2 = user2.toString().replace("-", '');
            //credit to micah
            newArr2.push(user2)
        }
        for (var i = 0; i < newArr.length; i++) {
            var compareContainer;
            compareContainer = newArr[i] - newArr2[i];
            compareArr.push(compareContainer);
            console.log(compareArr)
        }
    }
}
compare();
console.log(newArr)
console.log(newArr2)