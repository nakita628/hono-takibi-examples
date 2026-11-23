import { OpenAPIHono } from '@hono/zod-openapi'
import { deviceHandler, firmwareHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', deviceHandler).route('/', firmwareHandler)

export default app
