import { OpenAPIHono } from '@hono/zod-openapi'
import { privateHandler, publicHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', privateHandler).route('/', publicHandler)

export default app
