import { OpenAPIHono } from '@hono/zod-openapi'
import { v1alpha1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1alpha1Handler)

export default app
