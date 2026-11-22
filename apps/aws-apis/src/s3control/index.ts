import { OpenAPIHono } from '@hono/zod-openapi'
import { v20180820Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v20180820Handler)

export default app
