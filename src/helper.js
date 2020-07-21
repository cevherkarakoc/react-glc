export const hashCode = (str) => {
    return Array.from(str)
        .reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
}

export const objToHashSymbol = (obj) => Symbol.for(hashCode(JSON.stringify(obj)));