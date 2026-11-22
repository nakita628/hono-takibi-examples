import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute,
  getV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute,
  putV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signingGroupUsersHandler = app
  .openapi(deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSigningGroupsSigningGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
