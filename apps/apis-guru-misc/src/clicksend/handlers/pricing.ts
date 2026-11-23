import { OpenAPIHono } from '@hono/zod-openapi'
import { getPricingCountryCurrencyCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingHandler = app.openapi(getPricingCountryCurrencyCurrencyRoute, (c) => {
  throw new Error('Not implemented')
})
