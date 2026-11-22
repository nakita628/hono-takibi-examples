import { OpenAPIHono } from '@hono/zod-openapi'
import { areaCodeInformationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', areaCodeInformationHandler)

export default app
