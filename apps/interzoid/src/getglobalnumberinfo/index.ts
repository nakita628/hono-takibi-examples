import { OpenAPIHono } from '@hono/zod-openapi'
import { globalPhoneNumberInformationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', globalPhoneNumberInformationHandler)

export default app
