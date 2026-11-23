import { OpenAPIHono } from '@hono/zod-openapi'
import { ilpmtHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ilpmtHandler)

export default app
