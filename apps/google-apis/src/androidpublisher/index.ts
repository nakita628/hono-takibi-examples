import { OpenAPIHono } from '@hono/zod-openapi'
import { androidpublisherHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', androidpublisherHandler)

export default app
