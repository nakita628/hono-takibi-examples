import { OpenAPIHono } from '@hono/zod-openapi'
import { taxRatesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', taxRatesHandler)

export default app
