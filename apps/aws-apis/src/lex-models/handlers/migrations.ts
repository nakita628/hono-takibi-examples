import { OpenAPIHono } from '@hono/zod-openapi'
import { getMigrationsMigrationIdRoute, getMigrationsRoute, postMigrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const migrationsHandler = app
  .openapi(getMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
