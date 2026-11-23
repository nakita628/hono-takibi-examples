import { OpenAPIHono } from '@hono/zod-openapi'
import { labrpHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', labrpHandler)

export default app
