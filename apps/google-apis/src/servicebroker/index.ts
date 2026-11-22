import { OpenAPIHono } from '@hono/zod-openapi'
import { projectsHandler, v1beta1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', projectsHandler).route('/', v1beta1Handler)

export default app
