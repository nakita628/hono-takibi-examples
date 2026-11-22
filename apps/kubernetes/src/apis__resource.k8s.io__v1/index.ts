import { OpenAPIHono } from '@hono/zod-openapi'
import { resourceV1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', resourceV1Handler)

export default app
