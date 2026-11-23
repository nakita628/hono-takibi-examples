import { OpenAPIHono } from '@hono/zod-openapi'
import { createTestCardRangesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', createTestCardRangesHandler)

export default app
