import { OpenAPIHono } from '@hono/zod-openapi'
import { rsbycHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', rsbycHandler)

export default app
