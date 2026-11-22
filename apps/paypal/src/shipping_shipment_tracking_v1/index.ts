import { OpenAPIHono } from '@hono/zod-openapi'
import { trackersBatchHandler, trackersHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', trackersBatchHandler).route('/', trackersHandler)

export default app
