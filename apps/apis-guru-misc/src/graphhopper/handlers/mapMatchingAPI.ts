import { OpenAPIHono } from '@hono/zod-openapi'
import { postMatchRoute } from '../routes'

const app = new OpenAPIHono()

export const mapMatchingAPIHandler = app.openapi(postMatchRoute, (c) => {
  throw new Error('Not implemented')
})
