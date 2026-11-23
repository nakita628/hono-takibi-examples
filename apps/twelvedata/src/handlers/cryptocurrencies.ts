import { OpenAPIHono } from '@hono/zod-openapi'
import { getCryptocurrenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const cryptocurrenciesHandler = app.openapi(getCryptocurrenciesRoute, (c) => {
  throw new Error('Not implemented')
})
