import { OpenAPIHono } from '@hono/zod-openapi'
import { ercerHandler, pfdawHandler, tpcerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', ercerHandler).route('/', pfdawHandler).route('/', tpcerHandler)

export default app
