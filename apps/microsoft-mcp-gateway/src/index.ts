import { OpenAPIHono } from '@hono/zod-openapi'
import { adaptersHandler, mcpHandler, toolsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', adaptersHandler).route('/', toolsHandler).route('/', mcpHandler)

export default app
