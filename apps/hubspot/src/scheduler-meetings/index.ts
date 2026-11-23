import { OpenAPIHono } from '@hono/zod-openapi'
import { schedulerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', schedulerHandler)

export default app
