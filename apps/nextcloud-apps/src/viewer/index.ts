import { OpenAPIHono } from '@hono/zod-openapi'
import { ocsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ocsHandler)

export default app
