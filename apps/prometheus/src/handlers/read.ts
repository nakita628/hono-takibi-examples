import { OpenAPIHono } from '@hono/zod-openapi'
import { postReadRoute } from '../routes'

const app = new OpenAPIHono()

export const readHandler = app.openapi(postReadRoute, (c) => {
  throw new Error('Not implemented')
})
