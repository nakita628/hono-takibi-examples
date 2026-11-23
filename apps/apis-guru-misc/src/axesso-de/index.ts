import { OpenAPIHono } from '@hono/zod-openapi'
import { amzHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', amzHandler)

export default app
