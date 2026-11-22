import { OpenAPIHono } from '@hono/zod-openapi'
import { globalWorkflowsHandler, userWorkflowsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', globalWorkflowsHandler).route('/', userWorkflowsHandler)

export default app
