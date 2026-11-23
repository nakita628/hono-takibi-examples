import { OpenAPIHono } from '@hono/zod-openapi'
import { postDatafeedsBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const datafeedsHandler = app.openapi(postDatafeedsBatchRoute, (c) => {
  throw new Error('Not implemented')
})
