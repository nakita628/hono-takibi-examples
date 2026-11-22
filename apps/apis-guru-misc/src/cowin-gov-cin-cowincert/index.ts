import { OpenAPIHono } from '@hono/zod-openapi'
import { certificateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', certificateHandler)

export default app
