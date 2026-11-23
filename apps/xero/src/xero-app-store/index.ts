import { OpenAPIHono } from '@hono/zod-openapi'
import { subscriptionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', subscriptionsHandler)

export default app
