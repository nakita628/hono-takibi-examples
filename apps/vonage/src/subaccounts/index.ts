import { OpenAPIHono } from '@hono/zod-openapi'
import { subaccountManagementHandler, transfersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', transfersHandler).route('/', subaccountManagementHandler)

export default app
