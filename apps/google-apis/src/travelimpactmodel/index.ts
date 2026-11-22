import { OpenAPIHono } from '@hono/zod-openapi'
import { flightsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', flightsHandler)

export default app
