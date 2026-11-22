import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionMigrationIntentIDRoute } from '../routes'

const app = new OpenAPIHono()

export const migrationIntentHandler = app.openapi(getVersionMigrationIntentIDRoute, (c) => {
  throw new Error('Not implemented')
})
