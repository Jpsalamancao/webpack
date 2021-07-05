const fa = require ('fs');

fa.writeFileSync('./.env',`API =${process.env.API}\n`)