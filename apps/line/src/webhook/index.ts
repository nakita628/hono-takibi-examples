import { OpenAPIHono } from '@hono/zod-openapi'
import { dummyHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dummyHandler)

export default app
