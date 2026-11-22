import { OpenAPIHono } from '@hono/zod-openapi'
import { partnersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', partnersHandler)

export default app
