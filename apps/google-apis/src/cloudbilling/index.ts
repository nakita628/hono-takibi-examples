import { OpenAPIHono } from '@hono/zod-openapi'
import { billingAccountsHandler, v1betaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', billingAccountsHandler).route('/', v1betaHandler)

export default app
