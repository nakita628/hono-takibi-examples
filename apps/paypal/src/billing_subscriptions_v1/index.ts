import { OpenAPIHono } from '@hono/zod-openapi'
import { plansHandler, subscriptionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', plansHandler).route('/', subscriptionsHandler)

export default app
