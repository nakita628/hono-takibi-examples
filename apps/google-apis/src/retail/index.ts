import { OpenAPIHono } from '@hono/zod-openapi'
import { v2alphaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2alphaHandler)

export default app
