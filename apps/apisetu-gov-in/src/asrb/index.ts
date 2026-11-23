import { OpenAPIHono } from '@hono/zod-openapi'
import { mrcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mrcerHandler)

export default app
