import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetMyCommandsRoute } from '../routes'

const app = new OpenAPIHono()

export const setMyCommandsHandler = app.openapi(postSetMyCommandsRoute, (c) => {
  throw new Error('Not implemented')
})
