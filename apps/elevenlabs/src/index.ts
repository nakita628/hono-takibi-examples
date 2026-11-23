import { OpenAPIHono } from '@hono/zod-openapi'
import { docsHandler, v1Handler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', v1Handler).route('/', v2Handler).route('/', docsHandler)

export default app
