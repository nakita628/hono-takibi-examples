import { OpenAPIHono } from '@hono/zod-openapi'
import { pecerHandler, prfndHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pecerHandler).route('/', prfndHandler)

export default app
