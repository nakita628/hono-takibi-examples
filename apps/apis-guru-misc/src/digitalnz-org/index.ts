import { OpenAPIHono } from '@hono/zod-openapi'
import { recordsFormatHandler, recordsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', recordsFormatHandler).route('/', recordsHandler)

export default app
