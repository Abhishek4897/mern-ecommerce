module.exports = {
    "up": "UPDATE users SET name = 'John Snow' WHERE name = ''",
    "down": "UPDATE users SET name = '' WHERE name = 'John Snow'"
}