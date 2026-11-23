import { OpenAPIHono } from '@hono/zod-openapi'
import { getMediaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getMediaHandler)

export default app
