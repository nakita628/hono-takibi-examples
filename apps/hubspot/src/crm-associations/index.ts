import { OpenAPIHono } from '@hono/zod-openapi'
import { crmHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', crmHandler)

export default app
