import { OpenAPIHono } from '@hono/zod-openapi'
import { dashboardApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dashboardApiHandler)

export default app
