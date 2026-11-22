import { OpenAPIHono } from '@hono/zod-openapi'
import { payoutsHandler, payoutsItemHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', payoutsHandler).route('/', payoutsItemHandler)

export default app
