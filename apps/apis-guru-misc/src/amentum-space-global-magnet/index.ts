import { OpenAPIHono } from '@hono/zod-openapi'
import { magneticFieldHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', magneticFieldHandler)

export default app
