import { OpenAPIHono } from '@hono/zod-openapi'
import { operatorServiceHandler, workflowServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', workflowServiceHandler).route('/', operatorServiceHandler)

export default app
