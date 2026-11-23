import { OpenAPIHono } from '@hono/zod-openapi'
import { chartHandler, qrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', chartHandler).route('/', qrHandler)

export default app
