import { OpenAPIHono } from '@hono/zod-openapi'
import { categoryRatedAreasHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', categoryRatedAreasHandler)

export default app
