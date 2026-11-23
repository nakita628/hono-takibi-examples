import { OpenAPIHono } from '@hono/zod-openapi'
import { shopHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', shopHandler)

export default app
