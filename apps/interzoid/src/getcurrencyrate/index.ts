import { OpenAPIHono } from '@hono/zod-openapi'
import { currencyRatesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', currencyRatesHandler)

export default app
