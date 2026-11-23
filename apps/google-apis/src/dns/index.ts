import { OpenAPIHono } from '@hono/zod-openapi'
import { dnsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dnsHandler)

export default app
