export const RandomEmoji = () => {
    const emojis = ['👩🏼‍💼', '👩🏽‍💼', '👩🏾‍💼', '👩🏿‍💼', '🧕🏼', '🧕🏽', '🧕🏾', '🧕🏿', '👩🏻‍💻', '👩🏽‍💻', '👩🏾‍💻', '👩🏿‍💻'];
    return emojis[Math.floor(Math.random() * emojis.length)]
}
