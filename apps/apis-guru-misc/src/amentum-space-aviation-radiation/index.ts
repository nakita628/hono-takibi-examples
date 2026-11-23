import { OpenAPIHono } from '@hono/zod-openapi'
import { cari7Handler, parmaHandler, routeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', cari7Handler).route('/', parmaHandler).route('/', routeHandler)

export default app
