import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagresourceRoute } from '../routes'

const app = new OpenAPIHono()

export const tagresourceHandler = app.openapi(postTagresourceRoute, (c) => {
  throw new Error('Not implemented')
})
