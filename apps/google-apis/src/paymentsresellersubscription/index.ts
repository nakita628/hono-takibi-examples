import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentProductsRoute,
  getV1ParentPromotionsRoute,
  postV1NameCancelRoute,
  postV1NameEntitleRoute,
  postV1NameExtendRoute,
  postV1NameUndoCancelRoute,
  postV1ParentPromotionsFindEligibleRoute,
  postV1ParentSubscriptionsProvisionRoute,
  postV1ParentSubscriptionsRoute,
} from './routes'
import {
  getV1NameRouteHandler,
  getV1ParentProductsRouteHandler,
  getV1ParentPromotionsRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameEntitleRouteHandler,
  postV1NameExtendRouteHandler,
  postV1NameUndoCancelRouteHandler,
  postV1ParentPromotionsFindEligibleRouteHandler,
  postV1ParentSubscriptionsProvisionRouteHandler,
  postV1ParentSubscriptionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameEntitleRoute, postV1NameEntitleRouteHandler)
  .openapi(postV1NameExtendRoute, postV1NameExtendRouteHandler)
  .openapi(postV1NameUndoCancelRoute, postV1NameUndoCancelRouteHandler)
  .openapi(getV1ParentProductsRoute, getV1ParentProductsRouteHandler)
  .openapi(getV1ParentPromotionsRoute, getV1ParentPromotionsRouteHandler)
  .openapi(postV1ParentPromotionsFindEligibleRoute, postV1ParentPromotionsFindEligibleRouteHandler)
  .openapi(postV1ParentSubscriptionsRoute, postV1ParentSubscriptionsRouteHandler)
  .openapi(postV1ParentSubscriptionsProvisionRoute, postV1ParentSubscriptionsProvisionRouteHandler)

export default app
