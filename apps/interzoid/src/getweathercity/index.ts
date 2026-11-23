import { OpenAPIHono } from '@hono/zod-openapi'
import { getweatherHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getweatherHandler)

export default app
