type Setter=React.Dispatch<React.SetStateAction<boolean>>

export const showNotification=(setter: Setter) => {
    setter(true)
    setTimeout(() => {
        setter(false)
    },2000)
}

export const checkWin=(correct: string[], wrong: string[], word: string) => {
    let status='win'

    word.split('').forEach(letter => {
        if(!correct.includes(letter)) {
            status=''
        }
    })
    
    if(wrong.length===6) status='lose'
    return status
}