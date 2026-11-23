import { OpenAPIHono } from '@hono/zod-openapi'
import { postDumpsRoute } from '../routes'

const app = new OpenAPIHono()

export const dumpsHandler = app.openapi(postDumpsRoute, (c) => {
  throw new Error('Not implemented')
})
