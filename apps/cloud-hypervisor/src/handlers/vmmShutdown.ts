import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmmShutdownRoute } from '../routes'

const app = new OpenAPIHono()

export const vmmShutdownHandler = app.openapi(putVmmShutdownRoute, (c) => {
  throw new Error('Not implemented')
})
