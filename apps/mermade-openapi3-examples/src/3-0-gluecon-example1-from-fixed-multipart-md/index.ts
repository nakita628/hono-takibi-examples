import { OpenAPIHono } from '@hono/zod-openapi'
import { submitHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', submitHandler)

export default app
