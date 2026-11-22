import { OpenAPIHono } from '@hono/zod-openapi'
import { egm2008Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', egm2008Handler)

export default app
