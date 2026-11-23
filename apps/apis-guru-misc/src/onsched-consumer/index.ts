import { OpenAPIHono } from '@hono/zod-openapi'
import { consumerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', consumerHandler)

export default app
