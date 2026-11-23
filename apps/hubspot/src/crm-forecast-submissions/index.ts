import { OpenAPIHono } from '@hono/zod-openapi'
import { forecastSubmissionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', forecastSubmissionsHandler)

export default app
