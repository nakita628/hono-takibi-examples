import { OpenAPIHono } from '@hono/zod-openapi'
import { helloHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', helloHandler)

export default app
