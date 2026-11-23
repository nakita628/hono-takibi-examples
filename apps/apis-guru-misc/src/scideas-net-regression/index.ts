import { OpenAPIHono } from '@hono/zod-openapi'
import { regressionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', regressionHandler)

export default app
