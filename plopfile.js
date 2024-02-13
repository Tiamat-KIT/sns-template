module.exports = ( 
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    plop.setGenerator("component",{
        description: "create Components And Story Files",
        prompts: [{
            type: "input",
            name: "UpperPascalCase",
            message: "Input Components Name(UpperPascalCase)"
        }],
        actions: [
            {
                type: "add",
                path: "./src/stories/{{UpperPascalCase}}/{{UpperPascalCase}}.tsx",
                templateFile: "./src/plop-templates/Component.tsx.hbs"
            },
            {
                type: "add",
                path: "./src/stories/{{UpperPascalCase}}/{{UpperPascalCase}}.stories.ts",
                templateFile: "./src/plop-templates/Component.stories.ts.hbs"
            }
        ]
    })
}