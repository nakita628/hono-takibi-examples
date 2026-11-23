import { OpenAPIHono } from '@hono/zod-openapi'
import { sscerHandler, svcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', sscerHandler).route('/', svcerHandler)

export default app
