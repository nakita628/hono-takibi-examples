import { OpenAPIHono } from '@hono/zod-openapi'
import { payrollAuHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', payrollAuHandler)

export default app
