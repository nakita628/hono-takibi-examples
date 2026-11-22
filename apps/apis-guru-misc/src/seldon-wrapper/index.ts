import { OpenAPIHono } from '@hono/zod-openapi'
import { internalHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', internalHandler)

export default app
