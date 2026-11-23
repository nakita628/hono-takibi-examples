import { OpenAPIHono } from '@hono/zod-openapi'
import { publicHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', publicHandler)

export default app
