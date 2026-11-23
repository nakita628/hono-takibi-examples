import { OpenAPIHono } from '@hono/zod-openapi'
import { nameHandler, searchJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', nameHandler).route('/', searchJsonHandler)

export default app
