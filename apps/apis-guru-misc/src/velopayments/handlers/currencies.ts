import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CurrenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app.openapi(getV2CurrenciesRoute, (c) => {
  throw new Error('Not implemented')
})
