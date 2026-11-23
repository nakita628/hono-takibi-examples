import { OpenAPIHono } from '@hono/zod-openapi'
import { assetsHandler, renderHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', assetsHandler).route('/', renderHandler)

export default app
