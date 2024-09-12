module.exports = {
    './**/*.{ts,tsx}': [
        (files) => `eslint ${files.join(' ')} --fix`,
    ],
    './**/*.{ts,tsx,css,html,json}': [
        (files) => `prettier ${files.join(' ')} --write`,
    ],
};