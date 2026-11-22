import { OpenAPIHono } from '@hono/zod-openapi'
import { cloudEndpointsAndConnectionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cloudEndpointsAndConnectionHandler)

export default app
