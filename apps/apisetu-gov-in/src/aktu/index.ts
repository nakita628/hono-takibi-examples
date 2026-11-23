import { OpenAPIHono } from '@hono/zod-openapi'
import { dgcerHandler, dgmstHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dgcerHandler).route('/', dgmstHandler)

export default app
