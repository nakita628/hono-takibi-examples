import { OpenAPIHono } from '@hono/zod-openapi'
import { barcodeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', barcodeHandler)

export default app
