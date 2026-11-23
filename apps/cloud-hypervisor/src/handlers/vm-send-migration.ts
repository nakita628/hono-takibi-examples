import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmSendMigrationRoute } from '../routes'

const app = new OpenAPIHono()

export const vmSendMigrationHandler = app.openapi(putVmSendMigrationRoute, (c) => {
  throw new Error('Not implemented')
})
