import { OpenAPIHono } from '@hono/zod-openapi'
import { v2beta3Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2beta3Handler)

export default app
