import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdRoute,
  deleteOrganizationOrganizationIdVpcOrganizationVpcIdRoute,
  getOrganizationOrganizationIdVpcCloudsRoute,
  getOrganizationOrganizationIdVpcOrganizationVpcIdRoute,
  getOrganizationOrganizationIdVpcPeeringConnectionTypesRoute,
  getOrganizationOrganizationIdVpcsRoute,
  postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefreshRoute,
  postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRoute,
  postOrganizationOrganizationIdVpcsRoute,
  putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrsRoute,
  putOrganizationOrganizationIdVpcOrganizationVpcIdRoute,
  putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationVpcHandler = app
  .openapi(getOrganizationOrganizationIdVpcCloudsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdVpcOrganizationVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcOrganizationVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdVpcOrganizationVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionPeeringConnectionIdUserPeerNetworkCidrsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationOrganizationIdVpcOrganizationVpcIdUserPeerNetworkCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdVpcPeeringConnectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdVpcOrganizationVpcIdPeeringConnectionsRefreshRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
