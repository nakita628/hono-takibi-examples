import { OpenAPIHono } from '@hono/zod-openapi'
import { employeesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', employeesHandler)

export default app
