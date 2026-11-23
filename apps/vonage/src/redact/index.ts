import { OpenAPIHono } from '@hono/zod-openapi'
import { transactionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', transactionHandler)

export default app
