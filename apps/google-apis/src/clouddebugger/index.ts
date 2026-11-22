import { OpenAPIHono } from '@hono/zod-openapi'
import { controllerHandler, debuggerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', controllerHandler).route('/', debuggerHandler)

export default app
