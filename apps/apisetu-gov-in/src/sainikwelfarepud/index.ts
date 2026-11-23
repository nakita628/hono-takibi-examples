import { OpenAPIHono } from '@hono/zod-openapi'
import { dpcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dpcerHandler)

export default app
