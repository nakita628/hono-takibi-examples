import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
  deleteConnectionsExternalConnectionIdGroupsExternalGroupIdRoute,
  getConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
  getConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute,
  getConnectionsExternalConnectionIdGroupsExternalGroupIdRoute,
  getConnectionsExternalConnectionIdGroupsRoute,
  patchConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
  patchConnectionsExternalConnectionIdGroupsExternalGroupIdRoute,
  postConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute,
  postConnectionsExternalConnectionIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsExternalGroupHandler = app
  .openapi(getConnectionsExternalConnectionIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsExternalConnectionIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsExternalConnectionIdGroupsExternalGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdGroupsExternalGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdGroupsExternalGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
