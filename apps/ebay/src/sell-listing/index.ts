import { OpenAPIHono } from '@hono/zod-openapi'
import { itemDraftHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', itemDraftHandler)

export default app
