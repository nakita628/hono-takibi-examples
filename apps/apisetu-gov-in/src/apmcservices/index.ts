import { OpenAPIHono } from '@hono/zod-openapi'
import { apmclHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apmclHandler)

export default app
