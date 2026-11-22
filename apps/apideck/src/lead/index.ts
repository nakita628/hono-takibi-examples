import { OpenAPIHono } from '@hono/zod-openapi'
import { leadsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', leadsHandler)

export default app
