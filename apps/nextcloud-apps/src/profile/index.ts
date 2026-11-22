import { OpenAPIHono } from '@hono/zod-openapi'
import { profileApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', profileApiHandler)

export default app
