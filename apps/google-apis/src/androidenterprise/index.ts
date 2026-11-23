import { OpenAPIHono } from '@hono/zod-openapi'
import { androidenterpriseHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', androidenterpriseHandler)

export default app
