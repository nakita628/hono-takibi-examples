import { OpenAPIHono } from '@hono/zod-openapi'
import { currenciesHandler, metalsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', currenciesHandler).route('/', metalsHandler)

export default app
