import { OpenAPIHono } from '@hono/zod-openapi'
import { postShopV3MissionRoute } from './routes'
import { postShopV3MissionRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postShopV3MissionRoute, postShopV3MissionRouteHandler)

export default app
