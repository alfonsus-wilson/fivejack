function solution(relation) {
    var generateCandidate = function (valuesArray)
    {
        var combi = [];
        var temp = [];
        var slent = Math.pow(2, valuesArray.length);

        for (var i = 0; i < slent; i++)
        {
            temp = [];
            for (var j = 0; j < valuesArray.length; j++)
            {
                if ((i & Math.pow(2, j)))
                {
                    temp.push(valuesArray[j]);
                }
            }
            if (temp.length > 0)
            {
                combi.push(temp);
            }
        }

        combi.sort((a, b) => a.length - b.length);
        return combi;
    }
    var createDataFromColumn = function (index, data) {
        var result = [];
        data.forEach(element => {
            var temp = "";
            index.forEach(i => {
                temp += element[i];
            });
            result.push(temp);
        });
        return result;
    }
    var checkUnique = function (data) {
        let myDict = {}
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(myDict.hasOwnProperty(element)) return false;
            myDict[element] = true;
        }
        return true;
    }

    columnCount = relation[0].length;
    combi = [];
    for (let i = 0; i < columnCount; i++) {
        combi.push(i);
    }

    var answer = 0;
    candidateColumn = generateCandidate(combi);
    correctColumn = [];
    for (let j = 0; j < candidateColumn.length; j++) {
        const element = candidateColumn[j];
        let alreadyExists = false;
        for (let i = 0; i < correctColumn.length; i++) {
            const search = correctColumn[i];
            if(element.join("").indexOf(search) === 0) {
                alreadyExists = true;
                break;
            }
        }
        if(alreadyExists) continue;

        let currData = createDataFromColumn(element, relation);
        if(checkUnique(currData)) {
            answer += 1;
            correctColumn.push(element.join(""));
        }
    }

    return answer;
}