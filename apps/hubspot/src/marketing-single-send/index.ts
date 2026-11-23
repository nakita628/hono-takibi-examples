import { OpenAPIHono } from '@hono/zod-openapi'
import { marketingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', marketingHandler)

export default app
