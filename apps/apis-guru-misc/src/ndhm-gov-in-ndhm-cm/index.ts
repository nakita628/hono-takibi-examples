import { OpenAPIHono } from '@hono/zod-openapi'
import { v05Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v05Handler)

export default app
