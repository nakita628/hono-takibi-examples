import { OpenAPIHono } from '@hono/zod-openapi'
import { schedulingV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', schedulingV1Handler)

export default app
