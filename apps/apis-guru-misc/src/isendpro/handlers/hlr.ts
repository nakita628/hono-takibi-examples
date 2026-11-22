import { OpenAPIHono } from '@hono/zod-openapi'
import { postHlrRoute } from '../routes'

const app = new OpenAPIHono()

export const hlrHandler = app.openapi(postHlrRoute, (c) => {
  throw new Error('Not implemented')
})
