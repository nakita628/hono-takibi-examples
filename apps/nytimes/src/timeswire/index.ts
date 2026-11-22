import { OpenAPIHono } from '@hono/zod-openapi'
import { contentHandler, contentJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', contentJsonHandler).route('/', contentHandler)

export default app
