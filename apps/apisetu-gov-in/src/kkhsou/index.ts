import { OpenAPIHono } from '@hono/zod-openapi'
import { pvcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pvcerHandler)

export default app
