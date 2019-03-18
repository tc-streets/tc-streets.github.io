function reverse(st) {
    let f = ""
    let k = st.length
    for (let i = 1; i < k; k++) {
        f += st[k - i]
    }
}