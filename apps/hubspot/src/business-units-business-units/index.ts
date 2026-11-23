import { OpenAPIHono } from '@hono/zod-openapi'
import { businessUnitsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', businessUnitsHandler)

export default app
