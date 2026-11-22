import { OpenAPIHono } from '@hono/zod-openapi'
import { publicationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', publicationsHandler)

export default app
