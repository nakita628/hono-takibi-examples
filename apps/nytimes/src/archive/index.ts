import { OpenAPIHono } from '@hono/zod-openapi'
import { archiveHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', archiveHandler)

export default app
