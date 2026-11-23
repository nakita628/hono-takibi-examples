import { OpenAPIHono } from '@hono/zod-openapi'
import { v1beta2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1beta2Handler)

export default app
