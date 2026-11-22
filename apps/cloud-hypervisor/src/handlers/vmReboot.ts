import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmRebootRoute } from '../routes'

const app = new OpenAPIHono()

export const vmRebootHandler = app.openapi(putVmRebootRoute, (c) => {
  throw new Error('Not implemented')
})
