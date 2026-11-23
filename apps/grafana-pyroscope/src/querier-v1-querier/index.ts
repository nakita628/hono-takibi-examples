import { OpenAPIHono } from '@hono/zod-openapi'
import { querierV1QuerierServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', querierV1QuerierServiceHandler)

export default app
