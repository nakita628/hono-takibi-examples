import { OpenAPIHono } from '@hono/zod-openapi'
import { noteHandler, taskHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', noteHandler).route('/', taskHandler)

export default app
