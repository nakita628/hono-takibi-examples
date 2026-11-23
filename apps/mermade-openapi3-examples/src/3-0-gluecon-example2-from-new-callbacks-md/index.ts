import { OpenAPIHono } from '@hono/zod-openapi'
import { hooksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hooksHandler)

export default app
