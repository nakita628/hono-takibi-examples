import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SuggestRoute } from './routes'
import { getApiV1SuggestRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getApiV1SuggestRoute, getApiV1SuggestRouteHandler)

export default app
