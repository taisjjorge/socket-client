export const loggedInTemplate = name => `
    <input type="hidden" value="${name}" id="username"/>
    <span>${name}</span>
`;