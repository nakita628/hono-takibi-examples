import { OpenAPIHono } from '@hono/zod-openapi'
import { actuatorHandler, apiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', actuatorHandler).route('/', apiHandler)

export default app
