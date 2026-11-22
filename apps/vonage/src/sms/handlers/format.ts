import { OpenAPIHono } from '@hono/zod-openapi'
import { postFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app.openapi(postFormatRoute, (c) => {
  throw new Error('Not implemented')
})
