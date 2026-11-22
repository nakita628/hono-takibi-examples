import { OpenAPIHono } from '@hono/zod-openapi'
import { detailedZipCodeInformationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', detailedZipCodeInformationHandler)

export default app
