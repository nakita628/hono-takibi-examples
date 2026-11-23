import { OpenAPIHono } from '@hono/zod-openapi'
import { globalpageloadHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', globalpageloadHandler)

export default app
