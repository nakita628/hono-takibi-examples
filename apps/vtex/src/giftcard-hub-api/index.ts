import { OpenAPIHono } from '@hono/zod-openapi'
import { providerHandler, transactionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', providerHandler).route('/', transactionHandler)

export default app
