import { OpenAPIHono } from '@hono/zod-openapi'
import { reisezentrenHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', reisezentrenHandler)

export default app
