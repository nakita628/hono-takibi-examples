import { OpenAPIHono } from '@hono/zod-openapi'
import { postInputRoutingsRoute } from '../routes'

const app = new OpenAPIHono()

export const inputRoutingsHandler = app.openapi(postInputRoutingsRoute, (c) => {
  throw new Error('Not implemented')
})
