export const setMessage = (state, {type, message}) => {
    state.message = message
    state.type = type
    state.show = true
}

export const cleanMessage = (state) => {
    if(state.show){
        state.message = ''
        state.type = ''
        state.show = false
    }
}