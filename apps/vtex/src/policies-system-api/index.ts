import { OpenAPIHono } from '@hono/zod-openapi'
import { policyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', policyHandler)

export default app
