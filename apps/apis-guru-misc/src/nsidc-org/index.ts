import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerDocsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', swaggerDocsHandler)

export default app
