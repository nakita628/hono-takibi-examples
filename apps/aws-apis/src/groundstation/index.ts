import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConfigConfigTypeConfigIdRoute,
  deleteContactContactIdRoute,
  deleteDataflowEndpointGroupDataflowEndpointGroupIdRoute,
  deleteEphemerisEphemerisIdRoute,
  deleteMissionprofileMissionProfileIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAgentAgentIdConfigurationRoute,
  getConfigConfigTypeConfigIdRoute,
  getConfigRoute,
  getContactContactIdRoute,
  getDataflowEndpointGroupDataflowEndpointGroupIdRoute,
  getDataflowEndpointGroupRoute,
  getEphemerisEphemerisIdRoute,
  getGroundstationRoute,
  getMissionprofileMissionProfileIdRoute,
  getMissionprofileRoute,
  getSatelliteRoute,
  getSatelliteSatelliteIdRoute,
  getTagsResourceArnRoute,
  postAgentRoute,
  postConfigRoute,
  postContactRoute,
  postContactsRoute,
  postDataflowEndpointGroupRoute,
  postEphemeridesRoute,
  postEphemerisRoute,
  postMinuteUsageRoute,
  postMissionprofileRoute,
  postTagsResourceArnRoute,
  putAgentAgentIdRoute,
  putConfigConfigTypeConfigIdRoute,
  putEphemerisEphemerisIdRoute,
  putMissionprofileMissionProfileIdRoute,
} from './routes'
import {
  deleteConfigConfigTypeConfigIdRouteHandler,
  deleteContactContactIdRouteHandler,
  deleteDataflowEndpointGroupDataflowEndpointGroupIdRouteHandler,
  deleteEphemerisEphemerisIdRouteHandler,
  deleteMissionprofileMissionProfileIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAgentAgentIdConfigurationRouteHandler,
  getConfigConfigTypeConfigIdRouteHandler,
  getConfigRouteHandler,
  getContactContactIdRouteHandler,
  getDataflowEndpointGroupDataflowEndpointGroupIdRouteHandler,
  getDataflowEndpointGroupRouteHandler,
  getEphemerisEphemerisIdRouteHandler,
  getGroundstationRouteHandler,
  getMissionprofileMissionProfileIdRouteHandler,
  getMissionprofileRouteHandler,
  getSatelliteRouteHandler,
  getSatelliteSatelliteIdRouteHandler,
  getTagsResourceArnRouteHandler,
  postAgentRouteHandler,
  postConfigRouteHandler,
  postContactRouteHandler,
  postContactsRouteHandler,
  postDataflowEndpointGroupRouteHandler,
  postEphemeridesRouteHandler,
  postEphemerisRouteHandler,
  postMinuteUsageRouteHandler,
  postMissionprofileRouteHandler,
  postTagsResourceArnRouteHandler,
  putAgentAgentIdRouteHandler,
  putConfigConfigTypeConfigIdRouteHandler,
  putEphemerisEphemerisIdRouteHandler,
  putMissionprofileMissionProfileIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteContactContactIdRoute, deleteContactContactIdRouteHandler)
  .openapi(getContactContactIdRoute, getContactContactIdRouteHandler)
  .openapi(postConfigRoute, postConfigRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(postDataflowEndpointGroupRoute, postDataflowEndpointGroupRouteHandler)
  .openapi(getDataflowEndpointGroupRoute, getDataflowEndpointGroupRouteHandler)
  .openapi(postEphemerisRoute, postEphemerisRouteHandler)
  .openapi(postMissionprofileRoute, postMissionprofileRouteHandler)
  .openapi(getMissionprofileRoute, getMissionprofileRouteHandler)
  .openapi(deleteConfigConfigTypeConfigIdRoute, deleteConfigConfigTypeConfigIdRouteHandler)
  .openapi(getConfigConfigTypeConfigIdRoute, getConfigConfigTypeConfigIdRouteHandler)
  .openapi(putConfigConfigTypeConfigIdRoute, putConfigConfigTypeConfigIdRouteHandler)
  .openapi(
    deleteDataflowEndpointGroupDataflowEndpointGroupIdRoute,
    deleteDataflowEndpointGroupDataflowEndpointGroupIdRouteHandler,
  )
  .openapi(
    getDataflowEndpointGroupDataflowEndpointGroupIdRoute,
    getDataflowEndpointGroupDataflowEndpointGroupIdRouteHandler,
  )
  .openapi(deleteEphemerisEphemerisIdRoute, deleteEphemerisEphemerisIdRouteHandler)
  .openapi(getEphemerisEphemerisIdRoute, getEphemerisEphemerisIdRouteHandler)
  .openapi(putEphemerisEphemerisIdRoute, putEphemerisEphemerisIdRouteHandler)
  .openapi(
    deleteMissionprofileMissionProfileIdRoute,
    deleteMissionprofileMissionProfileIdRouteHandler,
  )
  .openapi(getMissionprofileMissionProfileIdRoute, getMissionprofileMissionProfileIdRouteHandler)
  .openapi(putMissionprofileMissionProfileIdRoute, putMissionprofileMissionProfileIdRouteHandler)
  .openapi(getAgentAgentIdConfigurationRoute, getAgentAgentIdConfigurationRouteHandler)
  .openapi(postMinuteUsageRoute, postMinuteUsageRouteHandler)
  .openapi(getSatelliteSatelliteIdRoute, getSatelliteSatelliteIdRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(postEphemeridesRoute, postEphemeridesRouteHandler)
  .openapi(getGroundstationRoute, getGroundstationRouteHandler)
  .openapi(getSatelliteRoute, getSatelliteRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postAgentRoute, postAgentRouteHandler)
  .openapi(postContactRoute, postContactRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(putAgentAgentIdRoute, putAgentAgentIdRouteHandler)

export default app
