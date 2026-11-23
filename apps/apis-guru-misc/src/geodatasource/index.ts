import { OpenAPIHono } from '@hono/zod-openapi'
import { cityHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cityHandler)

export default app
