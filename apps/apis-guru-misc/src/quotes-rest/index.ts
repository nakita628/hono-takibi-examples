import { OpenAPIHono } from '@hono/zod-openapi'
import { qodHandler, qshowHandler, quoteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', qodHandler).route('/', qshowHandler).route('/', quoteHandler)

export default app
