import { OpenAPIHono } from '@hono/zod-openapi'
import { countryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', countryHandler)

export default app
