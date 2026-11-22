import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectionsCountRoute,
  getConnectionsExternalConnectionIdGroupsCountRoute,
  getConnectionsExternalConnectionIdGroupsExternalGroupIdMembersCountRoute,
  getConnectionsExternalConnectionIdItemsCountRoute,
  getConnectionsExternalConnectionIdOperationsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdGroupsExternalGroupIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
