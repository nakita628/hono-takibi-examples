import { OpenAPIHono } from '@hono/zod-openapi'
import { disputesActionsHandler, disputesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', disputesHandler).route('/', disputesActionsHandler)

export default app
