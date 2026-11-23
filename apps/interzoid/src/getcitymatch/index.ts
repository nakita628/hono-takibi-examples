import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcitymatchRoute } from './routes'
import { getGetcitymatchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetcitymatchRoute, getGetcitymatchRouteHandler)

export default app
