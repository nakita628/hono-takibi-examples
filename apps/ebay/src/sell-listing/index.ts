import { OpenAPIHono } from '@hono/zod-openapi'
import { postItemDraftIndexRoute } from './routes'
import { postItemDraftIndexRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postItemDraftIndexRoute, postItemDraftIndexRouteHandler)

export default app
