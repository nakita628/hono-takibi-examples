import { OpenAPIHono } from '@hono/zod-openapi'
import { flowcontrolApiserverV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', flowcontrolApiserverV1Handler)

export default app
