import { OpenAPIHono } from '@hono/zod-openapi'
import { ingesterV1IngesterServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ingesterV1IngesterServiceHandler)

export default app
