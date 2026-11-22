import { OpenAPIHono } from '@hono/zod-openapi'
import { previewHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', previewHandler)

export default app
