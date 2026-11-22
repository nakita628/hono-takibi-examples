import { OpenAPIHono } from '@hono/zod-openapi'
import { getFactNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const numberFactsHandler = app.openapi(getFactNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
