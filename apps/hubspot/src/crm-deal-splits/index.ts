import { OpenAPIHono } from '@hono/zod-openapi'
import { postDealSplits202609BatchReadRoute, postDealSplits202609BatchUpsertRoute } from './routes'
import {
  postDealSplits202609BatchReadRouteHandler,
  postDealSplits202609BatchUpsertRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDealSplits202609BatchReadRoute, postDealSplits202609BatchReadRouteHandler)
  .openapi(postDealSplits202609BatchUpsertRoute, postDealSplits202609BatchUpsertRouteHandler)

export default app
