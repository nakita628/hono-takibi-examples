import { OpenAPIHono } from '@hono/zod-openapi'
import { sitesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sitesHandler)

export default app
