
export let doorPositionID

export const doorDIVPosition = () => {
    let doorPossibleStart = document.querySelectorAll(".brick")
    const random = Math.floor(Math.random() * doorPossibleStart.length)
    doorPositionID = doorPossibleStart[random].id
    console.log("where is door", doorPositionID)
}