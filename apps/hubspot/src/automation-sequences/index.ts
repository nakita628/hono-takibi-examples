import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, enrollmentHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', basicHandler).route('/', enrollmentHandler)

export default app
