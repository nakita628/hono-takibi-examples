import { OpenAPIHono } from '@hono/zod-openapi'
import { v1Handler, v1OutputFormatHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1OutputFormatHandler).route('/', v1Handler)

export default app
