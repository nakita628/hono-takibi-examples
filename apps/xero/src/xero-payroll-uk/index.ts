import { OpenAPIHono } from '@hono/zod-openapi'
import { payrollUkHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', payrollUkHandler)

export default app
