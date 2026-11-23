import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestErrorHandlingRoute } from '../routes'

const app = new OpenAPIHono()

export const restErrorHandlingHandler = app.openapi(postRestErrorHandlingRoute, (c) => {
  throw new Error('Not implemented')
})
