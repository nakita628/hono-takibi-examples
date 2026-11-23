import { OpenAPIHono } from '@hono/zod-openapi'
import { nodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', nodeHandler)

export default app
