import { OpenAPIHono } from '@hono/zod-openapi'
import { svgconvertHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', svgconvertHandler)

export default app
