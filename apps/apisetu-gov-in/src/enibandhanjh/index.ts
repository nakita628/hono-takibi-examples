import { OpenAPIHono } from '@hono/zod-openapi'
import { rdcerHandler, regriiHandler, rmcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', rdcerHandler).route('/', regriiHandler).route('/', rmcerHandler)

export default app
