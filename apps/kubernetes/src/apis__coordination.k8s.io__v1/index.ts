import { OpenAPIHono } from '@hono/zod-openapi'
import { coordinationV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', coordinationV1Handler)

export default app
