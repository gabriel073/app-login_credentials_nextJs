// prisma.config.ts
import { defineConfig } from '@prisma/config'

export default defineConfig({
  schema: './prisma/schema.prisma',
  generators: [
    {
      provider: 'prisma-client-js',
    },
  ],
  datasource: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL,
  },
})