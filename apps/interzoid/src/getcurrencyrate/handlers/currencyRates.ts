import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcurrencyrateRoute } from '../routes'

const app = new OpenAPIHono()

export const currencyRatesHandler = app.openapi(getGetcurrencyrateRoute, (c) => {
  throw new Error('Not implemented')
})
