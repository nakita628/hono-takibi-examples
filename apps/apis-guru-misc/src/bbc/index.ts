import { OpenAPIHono } from '@hono/zod-openapi'
import { feedsHandler, rawHandler, schemaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', schemaHandler).route('/', feedsHandler).route('/', rawHandler)

export default app
