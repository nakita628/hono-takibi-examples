import { OpenAPIHono } from '@hono/zod-openapi'
import { indexPhpHandler, ocsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', indexPhpHandler).route('/', ocsHandler)

export default app
