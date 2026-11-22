import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmShutdownRoute } from '../routes'

const app = new OpenAPIHono()

export const vmShutdownHandler = app.openapi(putVmShutdownRoute, (c) => {
  throw new Error('Not implemented')
})
