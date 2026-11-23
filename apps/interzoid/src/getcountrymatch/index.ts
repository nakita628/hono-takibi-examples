import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcountrymatchRoute } from './routes'
import { getGetcountrymatchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetcountrymatchRoute, getGetcountrymatchRouteHandler)

export default app
