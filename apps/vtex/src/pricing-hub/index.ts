import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, configHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', configHandler)

export default app
