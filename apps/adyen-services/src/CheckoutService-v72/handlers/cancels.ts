import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelsRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelsHandler = app.openapi(postCancelsRoute, (c) => {
  throw new Error('Not implemented')
})
