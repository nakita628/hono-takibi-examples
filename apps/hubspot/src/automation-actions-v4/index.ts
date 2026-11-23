import { OpenAPIHono } from '@hono/zod-openapi'
import { automationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', automationHandler)

export default app
