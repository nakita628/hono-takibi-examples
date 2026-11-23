import { OpenAPIHono } from '@hono/zod-openapi'
import { hvcerHandler, svcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', hvcerHandler).route('/', svcerHandler)

export default app
