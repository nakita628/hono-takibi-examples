import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOwnersOwnerIdMembersUserIdRoute,
  getOwnersOwnerIdMembersRoute,
  getOwnersOwnerIdRoute,
  getOwnersRoute,
  patchOwnersOwnerIdMembersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
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
