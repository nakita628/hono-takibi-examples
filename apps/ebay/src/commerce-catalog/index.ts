import { OpenAPIHono } from '@hono/zod-openapi'
import { productHandler, productSummaryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', productHandler).route('/', productSummaryHandler)

export default app
