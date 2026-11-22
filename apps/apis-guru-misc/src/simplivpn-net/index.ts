import { OpenAPIHono } from '@hono/zod-openapi'
import { simpliVPNAPIHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', simpliVPNAPIHandler)

export default app
