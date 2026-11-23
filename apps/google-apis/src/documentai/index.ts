import { OpenAPIHono } from '@hono/zod-openapi'
import { v1beta3Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1beta3Handler)

export default app
