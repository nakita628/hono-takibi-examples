import { OpenAPIHono } from '@hono/zod-openapi'
import { pdfGenerationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pdfGenerationHandler)

export default app
