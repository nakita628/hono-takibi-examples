import { OpenAPIHono } from '@hono/zod-openapi'
import { postPathRoute } from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app.openapi(postPathRoute, (c) => {
  throw new Error('Not implemented')
})
