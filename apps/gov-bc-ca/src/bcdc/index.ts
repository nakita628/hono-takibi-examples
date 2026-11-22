import { OpenAPIHono } from '@hono/zod-openapi'
import { actionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', actionHandler)

export default app
