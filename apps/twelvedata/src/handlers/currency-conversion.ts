import { OpenAPIHono } from '@hono/zod-openapi'
import { getCurrencyConversionRoute } from '../routes'

const app = new OpenAPIHono()

export const currencyConversionHandler = app.openapi(getCurrencyConversionRoute, (c) => {
  throw new Error('Not implemented')
})
