import { OpenAPIHono } from '@hono/zod-openapi'
import { agentUsersHandler, devicesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', devicesHandler).route('/', agentUsersHandler)

export default app
