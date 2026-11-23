import { OpenAPIHono } from '@hono/zod-openapi'
import { accountIdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', accountIdHandler)

export default app
