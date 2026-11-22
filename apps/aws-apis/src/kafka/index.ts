import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', apiHandler)

export default app
