import { OpenAPIHono } from '@hono/zod-openapi'
import { postMapRoute } from '../routes'

const app = new OpenAPIHono()

export const mapHandler = app.openapi(postMapRoute, (c) => {
  throw new Error('Not implemented')
})
