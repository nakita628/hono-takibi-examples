import { OpenAPIHono } from '@hono/zod-openapi'
import { hardwareHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hardwareHandler)

export default app
