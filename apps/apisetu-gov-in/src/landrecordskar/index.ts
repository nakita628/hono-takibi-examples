import { OpenAPIHono } from '@hono/zod-openapi'
import { cncerHandler, mutanHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cncerHandler).route('/', mutanHandler)

export default app
