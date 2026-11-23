import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameRoute,
  getV1beta1ParentInsightsRoute,
  getV1beta1ParentRecommendationsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameMarkAcceptedRoute,
  postV1beta1NameMarkClaimedRoute,
  postV1beta1NameMarkDismissedRoute,
  postV1beta1NameMarkFailedRoute,
  postV1beta1NameMarkSucceededRoute,
} from './routes'
import {
  getV1beta1NameRouteHandler,
  getV1beta1ParentInsightsRouteHandler,
  getV1beta1ParentRecommendationsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameMarkAcceptedRouteHandler,
  postV1beta1NameMarkClaimedRouteHandler,
  postV1beta1NameMarkDismissedRouteHandler,
  postV1beta1NameMarkFailedRouteHandler,
  postV1beta1NameMarkSucceededRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameMarkAcceptedRoute, postV1beta1NameMarkAcceptedRouteHandler)
  .openapi(postV1beta1NameMarkClaimedRoute, postV1beta1NameMarkClaimedRouteHandler)
  .openapi(postV1beta1NameMarkDismissedRoute, postV1beta1NameMarkDismissedRouteHandler)
  .openapi(postV1beta1NameMarkFailedRoute, postV1beta1NameMarkFailedRouteHandler)
  .openapi(postV1beta1NameMarkSucceededRoute, postV1beta1NameMarkSucceededRouteHandler)
  .openapi(getV1beta1ParentInsightsRoute, getV1beta1ParentInsightsRouteHandler)
  .openapi(getV1beta1ParentRecommendationsRoute, getV1beta1ParentRecommendationsRouteHandler)

export default app
