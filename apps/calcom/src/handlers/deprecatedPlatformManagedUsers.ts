import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2OauthClientsClientIdUsersUserIdRoute,
  getV2OauthClientsClientIdUsersRoute,
  getV2OauthClientsClientIdUsersUserIdRoute,
  patchV2OauthClientsClientIdUsersUserIdRoute,
  postV2OauthClientIdRefreshRoute,
  postV2OauthClientsClientIdUsersRoute,
  postV2OauthClientsClientIdUsersUserIdForceRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deprecatedPlatformManagedUsersHandler = app
  .openapi(getV2OauthClientsClientIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientsClientIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OauthClientsClientIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientsClientIdUsersUserIdForceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthClientIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
