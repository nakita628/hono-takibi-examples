import { OpenAPIHono } from '@hono/zod-openapi'
import { referenceDataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', referenceDataHandler)

export default app
