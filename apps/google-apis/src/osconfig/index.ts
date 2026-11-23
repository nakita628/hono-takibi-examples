import { OpenAPIHono } from '@hono/zod-openapi'
import { v1betaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1betaHandler)

export default app
