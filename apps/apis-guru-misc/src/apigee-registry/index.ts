import { OpenAPIHono } from '@hono/zod-openapi'
import { registryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', registryHandler)

export default app
