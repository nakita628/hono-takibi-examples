import { OpenAPIHono } from '@hono/zod-openapi'
import { snapshotsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', snapshotsHandler)

export default app
