import { OpenAPIHono } from '@hono/zod-openapi'
import { enumsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', enumsHandler)

export default app
