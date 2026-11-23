import { OpenAPIHono } from '@hono/zod-openapi'
import { getzipcodeinfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getzipcodeinfoHandler)

export default app
