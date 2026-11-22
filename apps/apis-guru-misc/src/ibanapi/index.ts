import { OpenAPIHono } from '@hono/zod-openapi'
import { ibanapiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ibanapiHandler)

export default app
