import { OpenAPIHono } from '@hono/zod-openapi'
import { merchantsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', merchantsHandler)

export default app
