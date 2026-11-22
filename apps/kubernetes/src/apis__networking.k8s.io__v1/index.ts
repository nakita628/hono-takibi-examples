import { OpenAPIHono } from '@hono/zod-openapi'
import { networkingV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', networkingV1Handler)

export default app
