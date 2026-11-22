import { OpenAPIHono } from '@hono/zod-openapi'
import { incidentsHandler, locationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', incidentsHandler).route('/', locationsHandler)

export default app
