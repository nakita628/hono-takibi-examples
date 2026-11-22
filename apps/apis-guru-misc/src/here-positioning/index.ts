import { OpenAPIHono } from '@hono/zod-openapi'
import { apiInformationHandler, locationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', apiInformationHandler).route('/', locationHandler)

export default app
