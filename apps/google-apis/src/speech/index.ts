import { OpenAPIHono } from '@hono/zod-openapi'
import { v2beta1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2beta1Handler)

export default app
