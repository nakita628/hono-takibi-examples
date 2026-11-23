import { OpenAPIHono } from '@hono/zod-openapi'
import { formHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', formHandler)

export default app
