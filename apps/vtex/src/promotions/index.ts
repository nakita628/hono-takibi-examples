import { OpenAPIHono } from '@hono/zod-openapi'
import { apiHandler, priceSheetHandler, pubHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiHandler).route('/', priceSheetHandler).route('/', pubHandler)

export default app
