import { OpenAPIHono } from '@hono/zod-openapi'
import { payrollNzHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', payrollNzHandler)

export default app
