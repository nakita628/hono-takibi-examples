import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmReceiveMigrationRoute } from '../routes'

const app = new OpenAPIHono()

export const vmReceiveMigrationHandler = app.openapi(putVmReceiveMigrationRoute, (c) => {
  throw new Error('Not implemented')
})
