function solution(record) {
    var answer = [];

    // sanitazion
    if (record.length < 1 || record.length > 100000) {
        console.error("Record length is not properly formatted");
        return
    }

    let myUsers = {}
    let historyEnter = []

    record.forEach(element => {
        let splitted = element.split(" ");
        let command = splitted[0];
        let userID = splitted[1];
        let uname = splitted[2];

        switch (command.toLowerCase()) {
            case "enter":
                myUsers[userID] = uname;
                historyEnter.push(userID);
                break;
            case "leave":
                historyEnter.push("-" + userID);
                break;
            case "change":
                myUsers[userID] = uname;
                break
            default:
                console.info("Found undefined command: ", command)
                break;
        }
    });

    historyEnter.forEach(element => {
        let userID = element;
        let enter = true;
        if(element[0] == "-") {
            userID = element.substr("1");
            enter = false;
        }

        let uname = myUsers[userID];
        if(enter) {
            answer.push(uname + " came in.");
        } else {
            answer.push(uname + " has left.");
        }
    });

    return answer;
}