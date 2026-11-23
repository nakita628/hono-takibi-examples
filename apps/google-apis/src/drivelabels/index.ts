import { OpenAPIHono } from '@hono/zod-openapi'
import { v2betaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2betaHandler)

export default app
