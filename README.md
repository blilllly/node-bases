# 02 Bases de Node

## jest test config

1. Instalaciones de desarrollo (super test es útil para probar Express)

```
npm install -D jest @types/jest ts-jest supertest
```

2. Crear archivo de configuración de Jest

```
npx create-jest
```

3. En el archivo **jest.config.js** configurar

```
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

4. Crear scripts en el **package.json**

```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

5. Añadir exclude en el archivo **ts.config.json**

```
{
  "compilerOptions": {},
  "exclude": ["jest.config.ts", "tests"]
}
```
