import { OpenAPIHono } from '@hono/zod-openapi'
import { secretsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', secretsHandler)

export default app
