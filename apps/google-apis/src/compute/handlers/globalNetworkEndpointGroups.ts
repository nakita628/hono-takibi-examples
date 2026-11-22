import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupRoute,
  getProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupRoute,
  getProjectsProjectGlobalNetworkEndpointGroupsRoute,
  postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpointsRoute,
  postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpointsRoute,
  postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpointsRoute,
  postProjectsProjectGlobalNetworkEndpointGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalNetworkEndpointGroupsHandler = app
  .openapi(getProjectsProjectGlobalNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalNetworkEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupAttachNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupDetachNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectGlobalNetworkEndpointGroupsNetworkEndpointGroupListNetworkEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
