import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
  deleteExternalConnectionsExternalConnectionIdGroupsExternalGroupIdRoute,
  deleteExternalConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  deleteExternalConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
  deleteExternalConnectionsExternalConnectionIdRoute,
  deleteExternalConnectionsExternalConnectionIdSchemaRoute,
  getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
  getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute,
  getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdRoute,
  getExternalConnectionsExternalConnectionIdGroupsRoute,
  getExternalConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  getExternalConnectionsExternalConnectionIdItemsRoute,
  getExternalConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
  getExternalConnectionsExternalConnectionIdOperationsRoute,
  getExternalConnectionsExternalConnectionIdRoute,
  getExternalConnectionsExternalConnectionIdSchemaRoute,
  getExternalConnectionsRoute,
  patchExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
  patchExternalConnectionsExternalConnectionIdGroupsExternalGroupIdRoute,
  patchExternalConnectionsExternalConnectionIdItemsExternalItemIdRoute,
  patchExternalConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
  patchExternalConnectionsExternalConnectionIdRoute,
  patchExternalConnectionsExternalConnectionIdSchemaRoute,
  postExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute,
  postExternalConnectionsExternalConnectionIdGroupsRoute,
  postExternalConnectionsExternalConnectionIdItemsRoute,
  postExternalConnectionsExternalConnectionIdOperationsRoute,
  postExternalConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalExternalConnectionHandler = app
  .openapi(getExternalConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExternalConnectionsExternalConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsExternalConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsExternalConnectionIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExternalConnectionsExternalConnectionIdGroupsExternalGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsExternalConnectionIdGroupsExternalGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchExternalConnectionsExternalConnectionIdGroupsExternalGroupIdMembersIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getExternalConnectionsExternalConnectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsExternalConnectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExternalConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsExternalConnectionIdItemsExternalItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsExternalConnectionIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteExternalConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getExternalConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchExternalConnectionsExternalConnectionIdOperationsConnectionOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteExternalConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsExternalConnectionIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
