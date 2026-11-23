import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmCancelMigrationRoute } from '../routes'

const app = new OpenAPIHono()

export const vmCancelMigrationHandler = app.openapi(putVmCancelMigrationRoute, (c) => {
  throw new Error('Not implemented')
})
