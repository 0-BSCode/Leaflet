module.exports = {
    './**/src/**/*.{ts,tsx}': [
        (files) => `eslint ${files.join(',')} --fix`,
    ],
    './**/src/**/*.{ts,tsx,css,html,json}': [
        (files) => `prettier ${files.join(',')} --write`,
    ],
};