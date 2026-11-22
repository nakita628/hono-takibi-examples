import { OpenAPIHono } from '@hono/zod-openapi'
import { batchHandler, dbHandler, domainsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', batchHandler).route('/', dbHandler).route('/', domainsHandler)

export default app
