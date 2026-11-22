import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdManagePersonalAccessTokensPatIdRoute,
  deleteApiV4GroupsIdManageResourceAccessTokensPratIdRoute,
  deleteApiV4GroupsIdManageSshKeysKeyIdRoute,
  getApiV4GroupsIdManagePersonalAccessTokensRoute,
  getApiV4GroupsIdManageResourceAccessTokensRoute,
  getApiV4GroupsIdManageSshKeysRoute,
  postApiV4GroupsIdManagePersonalAccessTokensPatIdRotateRoute,
  postApiV4GroupsIdManageResourceAccessTokensPratIdRotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupCredentialsInventoryHandler = app
  .openapi(getApiV4GroupsIdManagePersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdManagePersonalAccessTokensPatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdManagePersonalAccessTokensPatIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdManageResourceAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdManageResourceAccessTokensPratIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdManageResourceAccessTokensPratIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdManageSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdManageSshKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
