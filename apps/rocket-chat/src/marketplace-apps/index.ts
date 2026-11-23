import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, appHandler, appsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', appHandler).route('/', appsHandler)

export default app
