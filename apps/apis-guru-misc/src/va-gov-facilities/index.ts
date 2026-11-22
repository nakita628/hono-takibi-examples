import { OpenAPIHono } from '@hono/zod-openapi'
import { facilitiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', facilitiesHandler)

export default app
