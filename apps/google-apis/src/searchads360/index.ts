import { OpenAPIHono } from '@hono/zod-openapi'
import { customersHandler, searchAds360FieldsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', customersHandler).route('/', searchAds360FieldsHandler)

export default app
