import { OpenAPIHono } from '@hono/zod-openapi'
import { cocerHandler, rfcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cocerHandler).route('/', rfcerHandler)

export default app
