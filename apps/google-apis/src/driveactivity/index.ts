import { OpenAPIHono } from '@hono/zod-openapi'
import { activityHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', activityHandler)

export default app
