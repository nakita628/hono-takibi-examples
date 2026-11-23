import { OpenAPIHono } from '@hono/zod-openapi'
import { getMigrateResultRoute } from '../routes'

const app = new OpenAPIHono()

export const migrateHandler = app.openapi(getMigrateResultRoute, (c) => {
  throw new Error('Not implemented')
})
