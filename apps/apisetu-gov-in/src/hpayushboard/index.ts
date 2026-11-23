import { OpenAPIHono } from '@hono/zod-openapi'
import { phcerHandler, rpcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', phcerHandler).route('/', rpcerHandler)

export default app
