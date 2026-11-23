import { OpenAPIHono } from '@hono/zod-openapi'
import { travelHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', travelHandler)

export default app
