import { OpenAPIHono } from '@hono/zod-openapi'
import { productsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', productsHandler)

export default app
