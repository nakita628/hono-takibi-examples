import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcountrystandardRoute } from './routes'
import { getGetcountrystandardRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetcountrystandardRoute, getGetcountrystandardRouteHandler)

export default app
