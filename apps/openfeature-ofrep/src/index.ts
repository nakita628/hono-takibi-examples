import { OpenAPIHono } from '@hono/zod-openapi'
import { ofrepHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ofrepHandler)

export default app
