import { OpenAPIHono } from '@hono/zod-openapi'
import { buyersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', buyersHandler)

export default app
