import { OpenAPIHono } from '@hono/zod-openapi'
import { sectionFormatHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sectionFormatHandler)

export default app
