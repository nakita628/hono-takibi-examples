import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssignTerminalsRoute } from '../routes'

const app = new OpenAPIHono()

export const assignTerminalsHandler = app.openapi(postAssignTerminalsRoute, (c) => {
  throw new Error('Not implemented')
})
