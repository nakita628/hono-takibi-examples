import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAirtravelCoordinatesConfirmCarbonOffsetRoute,
  patchAirtravelCoordinatesConfirmPaymentRoute,
  patchAirtravelCoordinatesConfirmPlantingRoute,
  patchAirtravelCoordinatesConfirmTransactionRoute,
  patchAirtravelMultilegConfirmCarbonOffsetRoute,
  patchAirtravelMultilegConfirmPaymentRoute,
  patchAirtravelMultilegConfirmPlantingRoute,
  patchAirtravelMultilegConfirmTransactionRoute,
  patchEcommerceDeliveryConfirmCarbonOffsetRoute,
  patchEcommerceDeliveryConfirmPaymentRoute,
  patchEcommerceDeliveryConfirmPlantingRoute,
  patchEcommerceDeliveryConfirmTransactionRoute,
  patchRoadDistanceConfirmCarbonOffsetRoute,
  patchRoadDistanceConfirmPaymentRoute,
  patchRoadDistanceConfirmPlantingRoute,
  patchRoadDistanceConfirmTransactionRoute,
  patchUrbanDeliveryConfirmCarbonOffsetRoute,
  patchUrbanDeliveryConfirmPaymentRoute,
  patchUrbanDeliveryConfirmPlantingRoute,
  patchUrbanDeliveryConfirmTransactionRoute,
  postAirtravelCoordinatesRoute,
  postAirtravelMultilegRoute,
  postEcommerceDeliveryRoute,
  postRequestApiKeyRoute,
  postRoadDistanceRoute,
  postUrbanDeliveryRoute,
} from './routes'
import {
  patchAirtravelCoordinatesConfirmCarbonOffsetRouteHandler,
  patchAirtravelCoordinatesConfirmPaymentRouteHandler,
  patchAirtravelCoordinatesConfirmPlantingRouteHandler,
  patchAirtravelCoordinatesConfirmTransactionRouteHandler,
  patchAirtravelMultilegConfirmCarbonOffsetRouteHandler,
  patchAirtravelMultilegConfirmPaymentRouteHandler,
  patchAirtravelMultilegConfirmPlantingRouteHandler,
  patchAirtravelMultilegConfirmTransactionRouteHandler,
  patchEcommerceDeliveryConfirmCarbonOffsetRouteHandler,
  patchEcommerceDeliveryConfirmPaymentRouteHandler,
  patchEcommerceDeliveryConfirmPlantingRouteHandler,
  patchEcommerceDeliveryConfirmTransactionRouteHandler,
  patchRoadDistanceConfirmCarbonOffsetRouteHandler,
  patchRoadDistanceConfirmPaymentRouteHandler,
  patchRoadDistanceConfirmPlantingRouteHandler,
  patchRoadDistanceConfirmTransactionRouteHandler,
  patchUrbanDeliveryConfirmCarbonOffsetRouteHandler,
  patchUrbanDeliveryConfirmPaymentRouteHandler,
  patchUrbanDeliveryConfirmPlantingRouteHandler,
  patchUrbanDeliveryConfirmTransactionRouteHandler,
  postAirtravelCoordinatesRouteHandler,
  postAirtravelMultilegRouteHandler,
  postEcommerceDeliveryRouteHandler,
  postRequestApiKeyRouteHandler,
  postRoadDistanceRouteHandler,
  postUrbanDeliveryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAirtravelCoordinatesRoute, postAirtravelCoordinatesRouteHandler)
  .openapi(
    patchAirtravelCoordinatesConfirmCarbonOffsetRoute,
    patchAirtravelCoordinatesConfirmCarbonOffsetRouteHandler,
  )
  .openapi(
    patchAirtravelCoordinatesConfirmPaymentRoute,
    patchAirtravelCoordinatesConfirmPaymentRouteHandler,
  )
  .openapi(
    patchAirtravelCoordinatesConfirmPlantingRoute,
    patchAirtravelCoordinatesConfirmPlantingRouteHandler,
  )
  .openapi(
    patchAirtravelCoordinatesConfirmTransactionRoute,
    patchAirtravelCoordinatesConfirmTransactionRouteHandler,
  )
  .openapi(postAirtravelMultilegRoute, postAirtravelMultilegRouteHandler)
  .openapi(
    patchAirtravelMultilegConfirmCarbonOffsetRoute,
    patchAirtravelMultilegConfirmCarbonOffsetRouteHandler,
  )
  .openapi(
    patchAirtravelMultilegConfirmPaymentRoute,
    patchAirtravelMultilegConfirmPaymentRouteHandler,
  )
  .openapi(
    patchAirtravelMultilegConfirmPlantingRoute,
    patchAirtravelMultilegConfirmPlantingRouteHandler,
  )
  .openapi(
    patchAirtravelMultilegConfirmTransactionRoute,
    patchAirtravelMultilegConfirmTransactionRouteHandler,
  )
  .openapi(postEcommerceDeliveryRoute, postEcommerceDeliveryRouteHandler)
  .openapi(
    patchEcommerceDeliveryConfirmCarbonOffsetRoute,
    patchEcommerceDeliveryConfirmCarbonOffsetRouteHandler,
  )
  .openapi(
    patchEcommerceDeliveryConfirmPaymentRoute,
    patchEcommerceDeliveryConfirmPaymentRouteHandler,
  )
  .openapi(
    patchEcommerceDeliveryConfirmPlantingRoute,
    patchEcommerceDeliveryConfirmPlantingRouteHandler,
  )
  .openapi(
    patchEcommerceDeliveryConfirmTransactionRoute,
    patchEcommerceDeliveryConfirmTransactionRouteHandler,
  )
  .openapi(postRequestApiKeyRoute, postRequestApiKeyRouteHandler)
  .openapi(postRoadDistanceRoute, postRoadDistanceRouteHandler)
  .openapi(
    patchRoadDistanceConfirmCarbonOffsetRoute,
    patchRoadDistanceConfirmCarbonOffsetRouteHandler,
  )
  .openapi(patchRoadDistanceConfirmPaymentRoute, patchRoadDistanceConfirmPaymentRouteHandler)
  .openapi(patchRoadDistanceConfirmPlantingRoute, patchRoadDistanceConfirmPlantingRouteHandler)
  .openapi(
    patchRoadDistanceConfirmTransactionRoute,
    patchRoadDistanceConfirmTransactionRouteHandler,
  )
  .openapi(postUrbanDeliveryRoute, postUrbanDeliveryRouteHandler)
  .openapi(
    patchUrbanDeliveryConfirmCarbonOffsetRoute,
    patchUrbanDeliveryConfirmCarbonOffsetRouteHandler,
  )
  .openapi(patchUrbanDeliveryConfirmPaymentRoute, patchUrbanDeliveryConfirmPaymentRouteHandler)
  .openapi(patchUrbanDeliveryConfirmPlantingRoute, patchUrbanDeliveryConfirmPlantingRouteHandler)
  .openapi(
    patchUrbanDeliveryConfirmTransactionRoute,
    patchUrbanDeliveryConfirmTransactionRouteHandler,
  )

export default app
