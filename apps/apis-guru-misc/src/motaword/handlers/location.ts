import { OpenAPIHono } from '@hono/zod-openapi'
import { postLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const locationHandler = app.openapi(postLocationRoute, (c) => {
  throw new Error('Not implemented')
})
