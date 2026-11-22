import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterGroupsRequestsIdRoute,
  getClusterGroupsIdRequestsRoute,
  getClusterGroupsIdUsersRoute,
  getClusterGroupsRequestsRoute,
  postClusterGroupsIdLeaveRoute,
  postClusterGroupsIdRegeneratePeopleRoute,
  postClusterGroupsRequestsIdAcceptRoute,
  putClusterGroupsIdRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterGroupsHandler = app
  .openapi(getClusterGroupsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterGroupsRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterGroupsRequestsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterGroupsIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterGroupsIdRegeneratePeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterGroupsIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClusterGroupsIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterGroupsIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
