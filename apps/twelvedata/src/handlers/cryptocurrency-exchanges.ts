import { OpenAPIHono } from '@hono/zod-openapi'
import { getCryptocurrencyExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const cryptocurrencyExchangesHandler = app.openapi(getCryptocurrencyExchangesRoute, (c) => {
  throw new Error('Not implemented')
})
