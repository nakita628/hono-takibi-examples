import { OpenAPIHono } from '@hono/zod-openapi'
import { mappingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mappingHandler)

export default app
