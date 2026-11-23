import { OpenAPIHono } from '@hono/zod-openapi'
import { fmcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', fmcerHandler)

export default app
