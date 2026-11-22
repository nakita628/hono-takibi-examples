import { OpenAPIHono } from '@hono/zod-openapi'
import { domainsHandler, webhooksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', webhooksHandler).route('/', domainsHandler)

export default app
