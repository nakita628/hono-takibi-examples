import { OpenAPIHono } from '@hono/zod-openapi'
import { customerSupportHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', customerSupportHandler)

export default app
