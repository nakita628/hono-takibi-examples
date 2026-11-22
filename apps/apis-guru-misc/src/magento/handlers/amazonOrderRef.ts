import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1AmazonOrderRefRoute } from '../routes'

const app = new OpenAPIHono()

export const amazonOrderRefHandler = app.openapi(deleteV1AmazonOrderRefRoute, (c) => {
  throw new Error('Not implemented')
})
