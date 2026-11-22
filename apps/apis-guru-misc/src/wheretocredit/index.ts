import { OpenAPIHono } from '@hono/zod-openapi'
import { calculateHandler, programsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', calculateHandler).route('/', programsHandler)

export default app
