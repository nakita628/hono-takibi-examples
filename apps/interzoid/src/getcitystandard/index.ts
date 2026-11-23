import { OpenAPIHono } from '@hono/zod-openapi'
import { getcitystandardHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getcitystandardHandler)

export default app
