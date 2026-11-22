import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExternalConnectionsCountRoute,
  getExternalConnectionsExternalConnectionIdGroupsCountRoute,
  getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersCountRoute,
  getExternalConnectionsExternalConnectionIdItemsCountRoute,
  getExternalConnectionsExternalConnectionIdOperationsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalHandler = app
  .openapi(getExternalConnectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getExternalConnectionsExternalConnectionIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
