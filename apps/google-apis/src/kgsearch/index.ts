import { OpenAPIHono } from '@hono/zod-openapi'
import { entitiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', entitiesHandler)

export default app
