import { OpenAPIHono } from '@hono/zod-openapi'
import { seldonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', seldonHandler)

export default app
