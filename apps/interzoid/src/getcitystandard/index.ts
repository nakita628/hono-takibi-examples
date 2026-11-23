import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcitystandardRoute } from './routes'
import { getGetcitystandardRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetcitystandardRoute, getGetcitystandardRouteHandler)

export default app
