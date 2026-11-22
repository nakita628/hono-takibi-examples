import { OpenAPIHono } from '@hono/zod-openapi'
import { currentGlobalTimeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', currentGlobalTimeHandler)

export default app
