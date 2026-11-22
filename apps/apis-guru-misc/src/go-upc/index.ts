import { OpenAPIHono } from '@hono/zod-openapi'
import { productHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', productHandler)

export default app
