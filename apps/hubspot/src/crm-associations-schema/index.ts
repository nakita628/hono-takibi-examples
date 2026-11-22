import { OpenAPIHono } from '@hono/zod-openapi'
import { labelsHandler, limitsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', limitsHandler).route('/', labelsHandler)

export default app
