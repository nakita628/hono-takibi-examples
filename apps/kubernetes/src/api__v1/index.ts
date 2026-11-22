import { OpenAPIHono } from '@hono/zod-openapi'
import { coreV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', coreV1Handler)

export default app
