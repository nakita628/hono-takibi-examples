import { OpenAPIHono } from '@hono/zod-openapi'
import { publicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', publicHandler)

export default app
