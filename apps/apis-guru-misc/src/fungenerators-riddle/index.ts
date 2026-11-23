import { OpenAPIHono } from '@hono/zod-openapi'
import { riddleHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', riddleHandler)

export default app
