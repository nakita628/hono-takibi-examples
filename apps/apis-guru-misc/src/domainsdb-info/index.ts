import { OpenAPIHono } from '@hono/zod-openapi'
import { domainsHandler, infoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', domainsHandler).route('/', infoHandler)

export default app
