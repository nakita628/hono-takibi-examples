import { OpenAPIHono } from '@hono/zod-openapi'
import { epfscHandler, pecerHandler, uncrdHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', epfscHandler).route('/', pecerHandler).route('/', uncrdHandler)

export default app
