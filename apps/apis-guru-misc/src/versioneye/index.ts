import { OpenAPIHono } from '@hono/zod-openapi'
import { scansHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', scansHandler)

export default app
