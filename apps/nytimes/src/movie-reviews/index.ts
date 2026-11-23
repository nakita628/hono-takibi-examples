import { OpenAPIHono } from '@hono/zod-openapi'
import { criticsHandler, reviewsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', criticsHandler).route('/', reviewsHandler)

export default app
