import { OpenAPIHono } from '@hono/zod-openapi'
import { bookingsHandler, hotelsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', bookingsHandler).route('/', hotelsHandler)

export default app
