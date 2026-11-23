import { OpenAPIHono } from '@hono/zod-openapi'
import { walletobjectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', walletobjectsHandler)

export default app
