import { OpenAPIHono } from '@hono/zod-openapi'
import { numbersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', numbersHandler)

export default app
