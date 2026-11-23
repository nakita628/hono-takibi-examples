import { OpenAPIHono } from '@hono/zod-openapi'
import { classifierHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', classifierHandler)

export default app
