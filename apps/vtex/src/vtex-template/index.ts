import { OpenAPIHono } from '@hono/zod-openapi'
import { petsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', petsHandler)

export default app
