import { OpenAPIHono } from '@hono/zod-openapi'
import { miscellaneousHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', miscellaneousHandler)

export default app
