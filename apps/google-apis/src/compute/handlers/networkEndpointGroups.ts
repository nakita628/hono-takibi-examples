import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupRoute,
  getProjectsProjectAggregatedNetworkEndpointGroupsRoute,
  getProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupRoute,
  getProjectsProjectZonesZoneNetworkEndpointGroupsRoute,
  postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpointsRoute,
  postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpointsRoute,
  postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpointsRoute,
  postProjectsProjectZonesZoneNetworkEndpointGroupsResourceTestIamPermissionsRoute,
  postProjectsProjectZonesZoneNetworkEndpointGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkEndpointGroupsHandler = app
  .openapi(getProjectsProjectAggregatedNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectZonesZoneNetworkEndpointGroupsResourceTestIamPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
