# commands executed:
ng new projeto-buzzfeed
inside projeto-buzzfeed/
ng generate component components/quizz
ng generate component pages/home

add in tsconfig.json, inside "compilerOptions":{
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
}
to allow imports of json files in the project