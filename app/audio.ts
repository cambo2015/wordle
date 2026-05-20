let audioContext:AudioContext | null
let flipBuffer: AudioBuffer | null
let loadingPromise:Promise<void> | null

//path
const flipSoundPath = "/sounds/flip.wav"


export const playFlip = async()=>{
    if(!audioContext || !flipBuffer) return;
    const source = audioContext.createBufferSource();
    await audioContext.resume()
    source.buffer  = flipBuffer;
    source.connect(audioContext.destination)
    source.start(0)
}

export async function initializeSounds(){
    
    if(typeof window === "undefined"){
        return
    }
    
    if(flipBuffer) return;

    if(loadingPromise) return loadingPromise


    loadingPromise = (async ()=>{
        if(!audioContext){
            audioContext = new window.AudioContext()
        }
        await audioContext?.resume()

        const response = await fetch(flipSoundPath)
        const arrayBuffer = await response.arrayBuffer()
        flipBuffer = await audioContext.decodeAudioData(arrayBuffer)
    })()

    return loadingPromise
}

