import { OpenAPIHono } from '@hono/zod-openapi'
import { discoveryHandler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', discoveryHandler).route('/', v2Handler)

export default app
