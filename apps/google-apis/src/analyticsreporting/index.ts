import { OpenAPIHono } from '@hono/zod-openapi'
import { reportsHandler, userActivityHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', reportsHandler).route('/', userActivityHandler)

export default app
