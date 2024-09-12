const GREETINGS = [
    "Ласкаво просимо!",
    "Welcome!",
    "Bienvenue!",
    "Yōkoso!",
    "Huānyíng!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
