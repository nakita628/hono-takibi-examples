import { OpenAPIHono } from '@hono/zod-openapi'
import { generalHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', generalHandler)

export default app
