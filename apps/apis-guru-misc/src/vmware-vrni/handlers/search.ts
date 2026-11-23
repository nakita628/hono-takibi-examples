import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postSearchRoute, (c) => {
  throw new Error('Not implemented')
})
