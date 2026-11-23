import { OpenAPIHono } from '@hono/zod-openapi'
import { searchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', searchHandler)

export default app
