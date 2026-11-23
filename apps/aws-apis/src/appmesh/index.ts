import { OpenAPIHono } from '@hono/zod-openapi'
import { v20190125Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v20190125Handler)

export default app
