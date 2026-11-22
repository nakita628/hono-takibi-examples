import { OpenAPIHono } from '@hono/zod-openapi'
import { activitiesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', activitiesHandler)

export default app
