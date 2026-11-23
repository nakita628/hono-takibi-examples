import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RenderSyncRoute } from './routes'
import { postV1RenderSyncRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV1RenderSyncRoute, postV1RenderSyncRouteHandler)

export default app
