import { OpenAPIHono } from '@hono/zod-openapi'
import { mimicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', mimicHandler)

export default app
