import { OpenAPIHono } from '@hono/zod-openapi'
import { ocrHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ocrHandler)

export default app
