import { OpenAPIHono } from '@hono/zod-openapi'
import { balanceHandler, binHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', balanceHandler).route('/', binHandler)

export default app
