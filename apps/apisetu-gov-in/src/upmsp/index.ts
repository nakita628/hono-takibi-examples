import { OpenAPIHono } from '@hono/zod-openapi'
import { hscerHandler, sscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hscerHandler).route('/', sscerHandler)

export default app
