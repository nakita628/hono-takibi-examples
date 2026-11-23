import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1AftermarketListingsRoute, postV1AftermarketListingsExpiryRoute } from './routes'
import {
  deleteV1AftermarketListingsRouteHandler,
  postV1AftermarketListingsExpiryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1AftermarketListingsRoute, deleteV1AftermarketListingsRouteHandler)
  .openapi(postV1AftermarketListingsExpiryRoute, postV1AftermarketListingsExpiryRouteHandler)

export default app
