import { OpenAPIHono } from '@hono/zod-openapi'
import { putStopTestIdRoute } from '../routes'

const app = new OpenAPIHono()

export const stopHandler = app.openapi(putStopTestIdRoute, (c) => {
  throw new Error('Not implemented')
})
