import { OpenAPIHono } from '@hono/zod-openapi'
import { reportsHandler, userprofilesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', reportsHandler).route('/', userprofilesHandler)

export default app
