import { OpenAPIHono } from '@hono/zod-openapi'
import { countryNameStandardizationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', countryNameStandardizationHandler)

export default app
