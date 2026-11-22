import { OpenAPIHono } from '@hono/zod-openapi'
import { appsV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', appsV1Handler)

export default app
