import { OpenAPIHono } from '@hono/zod-openapi'
import { domainsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', domainsHandler)

export default app
