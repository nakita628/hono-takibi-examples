import { OpenAPIHono } from '@hono/zod-openapi'
import { linkManagementHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', linkManagementHandler)

export default app
