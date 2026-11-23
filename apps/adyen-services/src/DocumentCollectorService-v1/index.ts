import { OpenAPIHono } from '@hono/zod-openapi'
import { crossBorderInvoicesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', crossBorderInvoicesHandler)

export default app
