import { OpenAPIHono } from '@hono/zod-openapi'
import { requestSubjectErasureHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', requestSubjectErasureHandler)

export default app
