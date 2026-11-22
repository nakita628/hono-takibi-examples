import { OpenAPIHono } from '@hono/zod-openapi'
import { statusV1StatusServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', statusV1StatusServiceHandler)

export default app
