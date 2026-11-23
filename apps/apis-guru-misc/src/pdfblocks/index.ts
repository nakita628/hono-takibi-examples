import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1AddPasswordRoute,
  postV1AddRestrictionsRoute,
  postV1AddWatermarkImageRoute,
  postV1AddWatermarkTextRoute,
  postV1ExtractPagesRoute,
  postV1MergeDocumentsRoute,
  postV1RemovePagesRoute,
  postV1RemovePasswordRoute,
  postV1RemoveRestrictionsRoute,
  postV1RemoveSignaturesRoute,
  postV1ReversePagesRoute,
  postV1RotatePagesRoute,
} from './routes'
import {
  postV1AddPasswordRouteHandler,
  postV1AddRestrictionsRouteHandler,
  postV1AddWatermarkImageRouteHandler,
  postV1AddWatermarkTextRouteHandler,
  postV1ExtractPagesRouteHandler,
  postV1MergeDocumentsRouteHandler,
  postV1RemovePagesRouteHandler,
  postV1RemovePasswordRouteHandler,
  postV1RemoveRestrictionsRouteHandler,
  postV1RemoveSignaturesRouteHandler,
  postV1ReversePagesRouteHandler,
  postV1RotatePagesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AddPasswordRoute, postV1AddPasswordRouteHandler)
  .openapi(postV1AddRestrictionsRoute, postV1AddRestrictionsRouteHandler)
  .openapi(postV1AddWatermarkImageRoute, postV1AddWatermarkImageRouteHandler)
  .openapi(postV1AddWatermarkTextRoute, postV1AddWatermarkTextRouteHandler)
  .openapi(postV1ExtractPagesRoute, postV1ExtractPagesRouteHandler)
  .openapi(postV1MergeDocumentsRoute, postV1MergeDocumentsRouteHandler)
  .openapi(postV1RemovePagesRoute, postV1RemovePagesRouteHandler)
  .openapi(postV1RemovePasswordRoute, postV1RemovePasswordRouteHandler)
  .openapi(postV1RemoveRestrictionsRoute, postV1RemoveRestrictionsRouteHandler)
  .openapi(postV1RemoveSignaturesRoute, postV1RemoveSignaturesRouteHandler)
  .openapi(postV1ReversePagesRoute, postV1ReversePagesRouteHandler)
  .openapi(postV1RotatePagesRoute, postV1RotatePagesRouteHandler)

export default app
