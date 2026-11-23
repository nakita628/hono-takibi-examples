import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetMyCommandsRoute } from '../routes'

const app = new OpenAPIHono()

export const getMyCommandsHandler = app.openapi(postGetMyCommandsRoute, (c) => {
  throw new Error('Not implemented')
})
