import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute,
  getDevicesDeviceIdMethodsRoute,
  getDevicesDeviceIdRoute,
  getDevicesRoute,
  getTagsResourceArnRoute,
  postDevicesDeviceIdMethodsRoute,
  postTagsResourceArnRoute,
  putClaimsClaimCodeRoute,
  putDevicesDeviceIdFinalizeClaimRoute,
  putDevicesDeviceIdInitiateClaimRoute,
  putDevicesDeviceIdStateRoute,
  putDevicesDeviceIdUnclaimRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getDevicesDeviceIdEventsFromTimeStampToTimeStampRouteHandler,
  getDevicesDeviceIdMethodsRouteHandler,
  getDevicesDeviceIdRouteHandler,
  getDevicesRouteHandler,
  getTagsResourceArnRouteHandler,
  postDevicesDeviceIdMethodsRouteHandler,
  postTagsResourceArnRouteHandler,
  putClaimsClaimCodeRouteHandler,
  putDevicesDeviceIdFinalizeClaimRouteHandler,
  putDevicesDeviceIdInitiateClaimRouteHandler,
  putDevicesDeviceIdStateRouteHandler,
  putDevicesDeviceIdUnclaimRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putClaimsClaimCodeRoute, putClaimsClaimCodeRouteHandler)
  .openapi(getDevicesDeviceIdRoute, getDevicesDeviceIdRouteHandler)
  .openapi(putDevicesDeviceIdFinalizeClaimRoute, putDevicesDeviceIdFinalizeClaimRouteHandler)
  .openapi(getDevicesDeviceIdMethodsRoute, getDevicesDeviceIdMethodsRouteHandler)
  .openapi(postDevicesDeviceIdMethodsRoute, postDevicesDeviceIdMethodsRouteHandler)
  .openapi(putDevicesDeviceIdInitiateClaimRoute, putDevicesDeviceIdInitiateClaimRouteHandler)
  .openapi(
    getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute,
    getDevicesDeviceIdEventsFromTimeStampToTimeStampRouteHandler,
  )
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(putDevicesDeviceIdUnclaimRoute, putDevicesDeviceIdUnclaimRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(putDevicesDeviceIdStateRoute, putDevicesDeviceIdStateRouteHandler)

export default app
