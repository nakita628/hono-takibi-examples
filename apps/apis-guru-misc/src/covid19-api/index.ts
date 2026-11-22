import { OpenAPIHono } from '@hono/zod-openapi'
import { countryHandler, helpHandler, totalsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', countryHandler).route('/', helpHandler).route('/', totalsHandler)

export default app
