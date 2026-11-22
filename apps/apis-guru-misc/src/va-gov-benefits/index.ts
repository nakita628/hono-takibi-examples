import { OpenAPIHono } from '@hono/zod-openapi'
import { vbaDocumentsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', vbaDocumentsHandler)

export default app
