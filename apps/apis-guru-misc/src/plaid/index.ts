import { OpenAPIHono } from '@hono/zod-openapi'
import { plaidHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', plaidHandler)

export default app
