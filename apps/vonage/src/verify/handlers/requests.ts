import { OpenAPIHono } from '@hono/zod-openapi'
import { postFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app.openapi(postFormatRoute, (c) => {
  throw new Error('Not implemented')
})
