// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flare = "*") {
    return function (adjective = "special") {
        return `You are ${flare}${adjective}${flare}!`;
    };
}

wrapAdjective("a hard worker")()