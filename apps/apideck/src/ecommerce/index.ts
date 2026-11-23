import { OpenAPIHono } from '@hono/zod-openapi'
import { ecommerceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ecommerceHandler)

export default app
