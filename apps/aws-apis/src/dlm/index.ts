import { OpenAPIHono } from '@hono/zod-openapi'
import { policiesHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', policiesHandler).route('/', tagsHandler)

export default app
