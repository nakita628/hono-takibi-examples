import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, webhookExampleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', webhookExampleHandler)

export default app
