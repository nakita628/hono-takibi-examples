import { OpenAPIHono } from '@hono/zod-openapi'
import { forecastSettingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', forecastSettingsHandler)

export default app
