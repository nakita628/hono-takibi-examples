import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuotesLagoIdRoute, getQuotesLagoIdVersionsRoute, getQuotesRoute } from '../routes'

const app = new OpenAPIHono()

export const quotesHandler = app
  .openapi(getQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesLagoIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
