const box=document.getElementById("box");
setTimeout(()=>{
    box.innerText= `10`;
    setTimeout(()=>{
        box.innerText= `9`;
        setTimeout(()=>{
            box.innerText= `8`;
            setTimeout(()=>{
                box.innerText= `7`;
                setTimeout(()=>{
                    box.innerText= `6`;
                    setTimeout(()=>{
                        box.innerText= `5`;
                        setTimeout(()=>{
                            box.innerText= `4`;
                            setTimeout(()=>{
                                box.innerText= `3`;
                                setTimeout(()=>{
                                    box.innerText= `2`;
                                    setTimeout(()=>{
                                        box.innerText= `1`;
                                        setTimeout(()=>{
                                            box.innerHTML= `<p>Happy <br>independance <br>Day<p> <br></p>`;
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
