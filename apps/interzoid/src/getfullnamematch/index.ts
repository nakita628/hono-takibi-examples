import { OpenAPIHono } from '@hono/zod-openapi'
import { getfullnamematchHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getfullnamematchHandler)

export default app
