import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1alphaParentBiddingFunctionsRoute,
  postV1alphaNameActivateRoute,
  postV1alphaNameArchiveRoute,
  postV1alphaParentBiddingFunctionsRoute,
} from './routes'
import {
  getV1alphaParentBiddingFunctionsRouteHandler,
  postV1alphaNameActivateRouteHandler,
  postV1alphaNameArchiveRouteHandler,
  postV1alphaParentBiddingFunctionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1alphaNameActivateRoute, postV1alphaNameActivateRouteHandler)
  .openapi(postV1alphaNameArchiveRoute, postV1alphaNameArchiveRouteHandler)
  .openapi(getV1alphaParentBiddingFunctionsRoute, getV1alphaParentBiddingFunctionsRouteHandler)
  .openapi(postV1alphaParentBiddingFunctionsRoute, postV1alphaParentBiddingFunctionsRouteHandler)

export default app
