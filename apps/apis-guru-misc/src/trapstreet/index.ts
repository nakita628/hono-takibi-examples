import { OpenAPIHono } from '@hono/zod-openapi'
import { addressHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', addressHandler)

export default app
