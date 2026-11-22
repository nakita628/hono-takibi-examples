import { OpenAPIHono } from '@hono/zod-openapi'
import { weatherStatusHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', weatherStatusHandler)

export default app
