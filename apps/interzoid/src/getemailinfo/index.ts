import { OpenAPIHono } from '@hono/zod-openapi'
import { getemailinfoHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getemailinfoHandler)

export default app
