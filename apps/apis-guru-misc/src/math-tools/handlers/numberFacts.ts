import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersFactRoute } from '../routes'

const app = new OpenAPIHono()

export const numberFactsHandler = app.openapi(getNumbersFactRoute, (c) => {
  throw new Error('Not implemented')
})
