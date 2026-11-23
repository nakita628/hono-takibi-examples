import { OpenAPIHono } from '@hono/zod-openapi'
import { servicesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', servicesHandler)

export default app
