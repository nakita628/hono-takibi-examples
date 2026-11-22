import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3CreditIdRoute, getApiV3CreditRoute } from '../routes'

const app = new OpenAPIHono()

export const creditHandler = app
  .openapi(getApiV3CreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
