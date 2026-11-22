import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisplayRoute } from '../routes'

const app = new OpenAPIHono()

export const displayHandler = app.openapi(postDisplayRoute, (c) => {
  throw new Error('Not implemented')
})
