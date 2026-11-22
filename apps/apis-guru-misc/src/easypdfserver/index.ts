import { OpenAPIHono } from '@hono/zod-openapi'
import { makePdfHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', makePdfHandler)

export default app
