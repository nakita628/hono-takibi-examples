import { OpenAPIHono } from '@hono/zod-openapi'
import { hscerHandler, hsmgrHandler, sscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hscerHandler).route('/', hsmgrHandler).route('/', sscerHandler)

export default app
