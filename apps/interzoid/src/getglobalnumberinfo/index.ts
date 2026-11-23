import { OpenAPIHono } from '@hono/zod-openapi'
import { getglobalnumberinfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getglobalnumberinfoHandler)

export default app
