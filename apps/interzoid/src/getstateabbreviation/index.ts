import { OpenAPIHono } from '@hono/zod-openapi'
import { getstateabbreviationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getstateabbreviationHandler)

export default app
