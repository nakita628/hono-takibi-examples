import { OpenAPIHono } from '@hono/zod-openapi'
import { skuBindingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', skuBindingsHandler)

export default app
