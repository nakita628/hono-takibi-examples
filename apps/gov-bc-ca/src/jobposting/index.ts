import { OpenAPIHono } from '@hono/zod-openapi'
import { jobFeedHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', jobFeedHandler)

export default app
