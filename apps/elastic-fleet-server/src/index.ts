import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRoute,
  getApiFleetArtifactsIdSha2Route,
  getApiFleetFileIdRoute,
  getApiStatusRoute,
  postApiFleetAgentsEnrollRoute,
  postApiFleetAgentsIdAcksRoute,
  postApiFleetAgentsIdAuditUnenrollRoute,
  postApiFleetAgentsIdCheckinRoute,
  postApiFleetUploadsIdRoute,
  postApiFleetUploadsRoute,
  putApiFleetUploadsIdChunkNumRoute,
} from './routes'
import {
  getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRouteHandler,
  getApiFleetArtifactsIdSha2RouteHandler,
  getApiFleetFileIdRouteHandler,
  getApiStatusRouteHandler,
  postApiFleetAgentsEnrollRouteHandler,
  postApiFleetAgentsIdAcksRouteHandler,
  postApiFleetAgentsIdAuditUnenrollRouteHandler,
  postApiFleetAgentsIdCheckinRouteHandler,
  postApiFleetUploadsIdRouteHandler,
  postApiFleetUploadsRouteHandler,
  putApiFleetUploadsIdChunkNumRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiStatusRoute, getApiStatusRouteHandler)
  .openapi(postApiFleetAgentsEnrollRoute, postApiFleetAgentsEnrollRouteHandler)
  .openapi(postApiFleetAgentsIdCheckinRoute, postApiFleetAgentsIdCheckinRouteHandler)
  .openapi(postApiFleetAgentsIdAcksRoute, postApiFleetAgentsIdAcksRouteHandler)
  .openapi(getApiFleetArtifactsIdSha2Route, getApiFleetArtifactsIdSha2RouteHandler)
  .openapi(postApiFleetUploadsRoute, postApiFleetUploadsRouteHandler)
  .openapi(putApiFleetUploadsIdChunkNumRoute, putApiFleetUploadsIdChunkNumRouteHandler)
  .openapi(postApiFleetUploadsIdRoute, postApiFleetUploadsIdRouteHandler)
  .openapi(getApiFleetFileIdRoute, getApiFleetFileIdRouteHandler)
  .openapi(
    getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRoute,
    getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRouteHandler,
  )
  .openapi(postApiFleetAgentsIdAuditUnenrollRoute, postApiFleetAgentsIdAuditUnenrollRouteHandler)

export default app
