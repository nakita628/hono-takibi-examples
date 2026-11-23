import { OpenAPIHono } from '@hono/zod-openapi'
import { aiAlphaSearchMessagesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', aiAlphaSearchMessagesHandler)

export default app
