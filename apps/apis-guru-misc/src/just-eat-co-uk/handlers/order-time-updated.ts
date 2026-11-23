import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderTimeUpdatedRoute } from '../routes'

const app = new OpenAPIHono()

export const orderTimeUpdatedHandler = app.openapi(postOrderTimeUpdatedRoute, (c) => {
  throw new Error('Not implemented')
})
