import { OpenAPIHono } from '@hono/zod-openapi'
import { pdfHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pdfHandler)

export default app
