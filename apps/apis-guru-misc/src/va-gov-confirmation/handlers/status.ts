import { OpenAPIHono } from '@hono/zod-openapi'
import { postStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app.openapi(postStatusRoute, (c) => {
  throw new Error('Not implemented')
})
