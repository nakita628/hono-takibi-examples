import { OpenAPIHono } from '@hono/zod-openapi'
import { pushV1PusherServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pushV1PusherServiceHandler)

export default app
