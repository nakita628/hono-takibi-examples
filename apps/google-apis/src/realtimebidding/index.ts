import { OpenAPIHono } from '@hono/zod-openapi'
import { v1alphaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1alphaHandler)

export default app
