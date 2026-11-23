import { OpenAPIHono } from '@hono/zod-openapi'
import { postFormatDateTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const formatDateTimeHandler = app.openapi(postFormatDateTimeRoute, (c) => {
  throw new Error('Not implemented')
})
