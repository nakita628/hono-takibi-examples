import { OpenAPIHono } from '@hono/zod-openapi'
import { postInputRoute } from '../routes'

const app = new OpenAPIHono()

export const inputHandler = app.openapi(postInputRoute, (c) => {
  throw new Error('Not implemented')
})
