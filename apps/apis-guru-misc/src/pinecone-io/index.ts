import { OpenAPIHono } from '@hono/zod-openapi'
import { indexOperationsHandler, vectorOperationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', indexOperationsHandler).route('/', vectorOperationsHandler)

export default app
