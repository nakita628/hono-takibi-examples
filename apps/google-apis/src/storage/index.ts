import { OpenAPIHono } from '@hono/zod-openapi'
import { bHandler, channelsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', bHandler).route('/', channelsHandler).route('/', projectsHandler)

export default app
