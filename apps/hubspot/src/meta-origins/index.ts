import { OpenAPIHono } from '@hono/zod-openapi'
import { metaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', metaHandler)

export default app
