import { OpenAPIHono } from '@hono/zod-openapi'
import { getTokensPricesAllRoute, getTokensPricesTokenIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenPricesHandler = app
  .openapi(getTokensPricesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensPricesTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
