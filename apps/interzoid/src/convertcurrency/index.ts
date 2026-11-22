import { OpenAPIHono } from '@hono/zod-openapi'
import { liveCurrencyRateConversionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', liveCurrencyRateConversionHandler)

export default app
