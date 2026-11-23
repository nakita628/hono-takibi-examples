import { OpenAPIHono } from '@hono/zod-openapi'
import { budgetsHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', budgetsHandler).route('/', userHandler)

export default app
