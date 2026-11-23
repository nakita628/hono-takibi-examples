import { OpenAPIHono } from '@hono/zod-openapi'
import { globalwinescoresHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', globalwinescoresHandler)

export default app
