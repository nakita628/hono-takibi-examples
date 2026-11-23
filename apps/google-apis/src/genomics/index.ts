import { OpenAPIHono } from '@hono/zod-openapi'
import { v2alpha1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2alpha1Handler)

export default app
