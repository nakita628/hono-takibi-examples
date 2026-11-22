import { OpenAPIHono } from '@hono/zod-openapi'
import { nodeV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', nodeV1Handler)

export default app
