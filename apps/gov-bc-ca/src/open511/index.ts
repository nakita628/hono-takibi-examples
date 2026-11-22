import { OpenAPIHono } from '@hono/zod-openapi'
import { resourcesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', resourcesHandler)

export default app
