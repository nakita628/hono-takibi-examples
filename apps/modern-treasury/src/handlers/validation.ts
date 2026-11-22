import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiValidationsRoutingNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const validationHandler = app.openapi(getApiValidationsRoutingNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
