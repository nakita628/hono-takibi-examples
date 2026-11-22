import { OpenAPIHono } from '@hono/zod-openapi'
import { propertiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', propertiesHandler)

export default app
