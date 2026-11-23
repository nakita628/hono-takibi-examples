import { OpenAPIHono } from '@hono/zod-openapi'
import { dataStudioHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dataStudioHandler)

export default app
