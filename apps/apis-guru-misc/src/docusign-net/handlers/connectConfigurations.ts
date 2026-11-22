import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdConnectConnectIdRoute,
  deleteV21AccountsAccountIdConnectOauthRoute,
  getV21AccountsAccountIdConnectConnectIdAllUsersRoute,
  getV21AccountsAccountIdConnectConnectIdRoute,
  getV21AccountsAccountIdConnectConnectIdUsersRoute,
  getV21AccountsAccountIdConnectOauthRoute,
  getV21AccountsAccountIdConnectRoute,
  postV21AccountsAccountIdConnectOauthRoute,
  postV21AccountsAccountIdConnectRoute,
  putV21AccountsAccountIdConnectOauthRoute,
  putV21AccountsAccountIdConnectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectConfigurationsHandler = app
  .openapi(getV21AccountsAccountIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdConnectOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdConnectConnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectConnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectConnectIdAllUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdConnectConnectIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
