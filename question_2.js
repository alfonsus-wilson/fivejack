function solution(N, users) {
    // sanitazion
    if (N.length < 1 || N.length > 500) {
        console.error("N length is not properly formatted");
        return
    }
    if (users.length < 1 || users.length > 200000) {
        console.error("users length is not properly formatted");
        return
    }

    let myMap = Array(N);
    myMap.fill(0);

    users.forEach(element => {
        if (element <= N) {
            myMap[element-1] += 1;   
        }
    });

    let userCount = users.length;
    for (let i = 0; i < myMap.length; i++) {
        const element = myMap[i];
        myMap[i] = element/userCount;
        userCount -= element;
    }

    indexedMap = myMap.map(function(e,i){return {ind: i, val: e}});
    indexedMap.sort(function(x, y){return x.val < y.val ? 1 : x.val == y.val ? 0 : -1});
    indices = indexedMap.map((e) => e.ind + 1);

    var answer = indices;
    return answer;
}