import { OpenAPIHono } from '@hono/zod-openapi'
import { feedConnectionsHandler, statementsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', feedConnectionsHandler).route('/', statementsHandler)

export default app
