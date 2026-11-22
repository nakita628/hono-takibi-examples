import { OpenAPIHono } from '@hono/zod-openapi'
import { emailAddressInformationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', emailAddressInformationHandler)

export default app
