import { OpenAPIHono } from '@hono/zod-openapi'
import { urlMappingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', urlMappingsHandler)

export default app
