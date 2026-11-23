import { OpenAPIHono } from '@hono/zod-openapi'
import { botHandler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v2Handler).route('/', botHandler)

export default app
