import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, koboHandler, oidcHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', koboHandler).route('/', oidcHandler)

export default app
