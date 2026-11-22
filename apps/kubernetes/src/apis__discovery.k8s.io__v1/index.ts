import { OpenAPIHono } from '@hono/zod-openapi'
import { discoveryV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', discoveryV1Handler)

export default app
