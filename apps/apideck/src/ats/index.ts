import { OpenAPIHono } from '@hono/zod-openapi'
import { applicantsHandler, jobsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', applicantsHandler).route('/', jobsHandler)

export default app
