import { OpenAPIHono } from '@hono/zod-openapi'
import { billingAccountsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', billingAccountsHandler)

export default app
