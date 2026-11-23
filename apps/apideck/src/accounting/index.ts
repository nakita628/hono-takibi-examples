import { OpenAPIHono } from '@hono/zod-openapi'
import { accountingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountingHandler)

export default app
