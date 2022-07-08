module.exports = {

    getLotr: (req, res) => {
        const lotr = ["Boromir! (The Protector)", 
        "Pippin! (The Performer)", 
        "Legolas! (The Composer)",
        "Sam! (The Champion)",
        "Elrond! (The Mastermind)",
        "Frodo! (The Healer)",
        "Gollum! (The liar & Thief)"
    ]

        let randomIndex = Math.floor(Math.random() * lotr.length);
        let randomLotr = lotr[randomIndex];
      
        res.status(200).send(randomLotr);
    }
}