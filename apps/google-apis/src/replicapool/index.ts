import { OpenAPIHono } from '@hono/zod-openapi'
import { poolsHandler, replicasHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', poolsHandler).route('/', replicasHandler)

export default app
