import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionIdRoute,
  deleteApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionIdRoute,
  deleteApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameRoute,
  deleteApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameRoute,
  deleteApiAtlasV2GroupsGroupIdStreamsTenantNameRoute,
  deleteApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdRoute,
  deleteApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdStreamsAccountDetailsRoute,
  getApiAtlasV2GroupsGroupIdStreamsActiveVpcPeeringConnectionsRoute,
  getApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionIdRoute,
  getApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsRoute,
  getApiAtlasV2GroupsGroupIdStreamsRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameAuditLogsRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionIdRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameDownloadOperationalLogsRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorsRoute,
  getApiAtlasV2GroupsGroupIdStreamsTenantNameRoute,
  getApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsRoute,
  getApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsRoute,
  patchApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionIdRoute,
  patchApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionIdRoute,
  patchApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameRoute,
  patchApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameRoute,
  patchApiAtlasV2GroupsGroupIdStreamsTenantNameRoute,
  postApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsRoute,
  postApiAtlasV2GroupsGroupIdStreamsRoute,
  postApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsRoute,
  postApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsRoute,
  postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStartRoute,
  postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStartWithRoute,
  postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStopRoute,
  postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorRoute,
  postApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdAcceptRoute,
  postApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdRejectRoute,
  postApiAtlasV2GroupsGroupIdStreamsWithSampleConnectionsRoute,
  postApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStreamsTenantNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdStreamsTenantNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAtlasV2GroupsGroupIdStreamsTenantNameConnectionsConnectionNameFailoverConnectionsFailoverConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStartWithRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorProcessorNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameProcessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsTenantNameDownloadOperationalLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsAccountDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsActiveVpcPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdStreamsPrivateLinkConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsVpcPeeringConnectionsIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsWithSampleConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStreamsWorkspacePrivateEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
