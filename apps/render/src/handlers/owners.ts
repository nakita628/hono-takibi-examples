import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOwnersOwnerIdMembersUserIdRoute,
  getOwnersOwnerIdAuditLogsRoute,
  getOwnersOwnerIdMembersRoute,
  getOwnersOwnerIdRoute,
  getOwnersRoute,
  patchOwnersOwnerIdMembersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ownersHandler = app
  .openapi(patchOwnersOwnerIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOwnersOwnerIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnersOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnersOwnerIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwnersOwnerIdAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
