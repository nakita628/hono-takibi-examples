import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateTestCardRangesRoute } from './routes'
import { postCreateTestCardRangesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postCreateTestCardRangesRoute, postCreateTestCardRangesRouteHandler)

export default app
