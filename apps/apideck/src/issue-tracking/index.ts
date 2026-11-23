import { OpenAPIHono } from '@hono/zod-openapi'
import { issueTrackingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', issueTrackingHandler)

export default app
