import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserManagementAuthorizeRoute,
  getUserManagementRadarChallengesIdRoute,
  getUserManagementSessionsLogoutRoute,
  postUserManagementAuthenticateRoute,
  postUserManagementAuthorizeDeviceRoute,
  postUserManagementRadarChallengesRoute,
  postUserManagementSessionsRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementAuthenticationHandler = app
  .openapi(postUserManagementAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementAuthorizeDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementRadarChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementRadarChallengesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementSessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementSessionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
