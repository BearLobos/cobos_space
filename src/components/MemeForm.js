import React, { useState, useEffect } from "react"

function MemeForm() {
    const [inputText, setInputText] = useState({
        topText: "",
        bottomText: ""
    })
    const [randImg, setRandImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])

    function handleText(event) {
        const { name, value } = event.target
        setInputText({
            ...inputText,
            [name]: value
        })
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                setAllMemeImgs(memes)
            })
    }, [])
    
    function handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        const randMemeImg = allMemeImgs[randNum].url
        setRandImg(randMemeImg)
    }

    return (
        <div>
            <h1>Meme Generator</h1>
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={inputText.topText}
                        onChange={handleText}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={inputText.bottomText}
                        onChange={handleText}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={randImg} alt="" className="memeImg"/>
                    <h2 className="top">{inputText.topText}</h2>
                    <h2 className="bottom">{inputText.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}

export default MemeForm