import { OpenAPIHono } from '@hono/zod-openapi'
import { alsfcHandler, clcerHandler, srcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', alsfcHandler).route('/', clcerHandler).route('/', srcerHandler)

export default app
