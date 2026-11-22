import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupRoute,
  getProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupRoute,
  getProjectsProjectRegionsRegionNetworkEndpointGroupsRoute,
  postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpointsRoute,
  postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpointsRoute,
  postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpointsRoute,
  postProjectsProjectRegionsRegionNetworkEndpointGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionNetworkEndpointGroupsHandler = app
  .openapi(getProjectsProjectRegionsRegionNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
