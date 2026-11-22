import { OpenAPIHono } from '@hono/zod-openapi'
import { insightHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', insightHandler)

export default app
