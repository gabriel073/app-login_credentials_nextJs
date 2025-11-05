// prisma.config.ts
// import { defineConfig } from '@prisma/config'

// export default defineConfig({
//   schema: './prisma/schema.prisma',
//   generators: [
//     {
//       provider: 'prisma-client-js',
//     },
//   ],
//   datasource: {
//     provider: 'postgresql',
//     DATABASE_URL: process.env.DATABASE_URL,
//   },
// })

import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  env: {
    DATABASE_URL: process.env.DATABASE_URL!, // <- asegurate que esté definida
  },
});