import { OpenAPIHono } from '@hono/zod-openapi'
import { clustersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', clustersHandler)

export default app
