import { OpenAPIHono } from '@hono/zod-openapi'
import { lawsApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', lawsApiHandler)

export default app
