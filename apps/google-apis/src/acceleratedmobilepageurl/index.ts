import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AmpUrlsBatchGetRoute } from './routes'
import { postV1AmpUrlsBatchGetRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV1AmpUrlsBatchGetRoute, postV1AmpUrlsBatchGetRouteHandler)

export default app
