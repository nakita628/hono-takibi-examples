import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserStarsDashboardUidDashboardUidRoute,
  getUserAuthTokensRoute,
  getUserEmailUpdateRoute,
  getUserOrgsRoute,
  getUserPreferencesRoute,
  getUserQuotasRoute,
  getUserRoute,
  getUserTeamsRoute,
  patchUserPreferencesRoute,
  postUserRevokeAuthTokenRoute,
  postUserStarsDashboardUidDashboardUidRoute,
  postUserUsingOrgIdRoute,
  putUserPasswordRoute,
  putUserPreferencesRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAuthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRevokeAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserStarsDashboardUidDashboardUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserStarsDashboardUidDashboardUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUsingOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
