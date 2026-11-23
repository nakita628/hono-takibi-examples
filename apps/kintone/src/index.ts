import { OpenAPIHono } from '@hono/zod-openapi'
import { kHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', kHandler)

export default app
