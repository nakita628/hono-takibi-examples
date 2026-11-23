import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindEligibleItemsRoute, postSendOfferToInterestedBuyersRoute } from './routes'
import {
  getFindEligibleItemsRouteHandler,
  postSendOfferToInterestedBuyersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFindEligibleItemsRoute, getFindEligibleItemsRouteHandler)
  .openapi(postSendOfferToInterestedBuyersRoute, postSendOfferToInterestedBuyersRouteHandler)

export default app
