import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdSigningGroupsRoute,
  getV21AccountsAccountIdSigningGroupsRoute,
  getV21AccountsAccountIdSigningGroupsSigningGroupIdRoute,
  postV21AccountsAccountIdSigningGroupsRoute,
  putV21AccountsAccountIdSigningGroupsRoute,
  putV21AccountsAccountIdSigningGroupsSigningGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signingGroupsHandler = app
  .openapi(deleteV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSigningGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSigningGroupsSigningGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSigningGroupsSigningGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
