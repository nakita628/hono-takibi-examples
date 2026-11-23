import { OpenAPIHono } from '@hono/zod-openapi'
import { apiVersionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiVersionHandler)

export default app
