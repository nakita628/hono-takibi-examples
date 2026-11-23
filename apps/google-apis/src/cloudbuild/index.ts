import { OpenAPIHono } from '@hono/zod-openapi'
import { v1alpha2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1alpha2Handler)

export default app
