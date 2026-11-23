import { OpenAPIHono } from '@hono/zod-openapi'
import { resourcesHandler, resourcesJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', resourcesJsonHandler).route('/', resourcesHandler)

export default app
