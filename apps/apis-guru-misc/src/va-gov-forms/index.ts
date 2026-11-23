import { OpenAPIHono } from '@hono/zod-openapi'
import { formsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', formsHandler)

export default app
