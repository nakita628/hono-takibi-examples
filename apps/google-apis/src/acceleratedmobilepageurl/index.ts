import { OpenAPIHono } from '@hono/zod-openapi'
import { ampUrlsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ampUrlsHandler)

export default app
