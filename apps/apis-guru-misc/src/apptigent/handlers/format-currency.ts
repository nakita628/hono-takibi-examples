import { OpenAPIHono } from '@hono/zod-openapi'
import { postFormatCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const formatCurrencyHandler = app.openapi(postFormatCurrencyRoute, (c) => {
  throw new Error('Not implemented')
})
