import { OpenAPIHono } from '@hono/zod-openapi'
import { offerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', offerHandler)

export default app
