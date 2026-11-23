import { OpenAPIHono } from '@hono/zod-openapi'
import { visitorIdentificationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', visitorIdentificationHandler)

export default app
