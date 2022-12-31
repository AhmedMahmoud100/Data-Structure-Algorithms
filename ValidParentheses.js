const s = '(()5 + 3 ){}'

function arePair(open, close) {
    if (open === '(' && close === ')') return true
    else if (open === '{' && close === '}') return true
    else if (open === '[' && close === ']') return true
    return false
}

function ValidParentheses(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])

        } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (stack.length === 0 || !arePair(stack[stack.length - 1], s[i])) return false
            else stack.pop()
        }
    }

    return stack.length === 0 ? true : false
}
console.log(ValidParentheses(s))