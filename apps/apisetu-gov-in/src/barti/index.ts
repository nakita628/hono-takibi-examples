import { OpenAPIHono } from '@hono/zod-openapi'
import { cvcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cvcerHandler)

export default app
