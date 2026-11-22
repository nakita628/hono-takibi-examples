import { OpenAPIHono } from '@hono/zod-openapi'
import { externalAmbassadorAPIHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', externalAmbassadorAPIHandler)

export default app
