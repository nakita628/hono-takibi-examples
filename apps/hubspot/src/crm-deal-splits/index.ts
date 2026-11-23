import { OpenAPIHono } from '@hono/zod-openapi'
import { dealSplitsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', dealSplitsHandler)

export default app
