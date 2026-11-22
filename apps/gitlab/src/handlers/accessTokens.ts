import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminTokenRoute,
  deleteApiV4GroupsIdAccessTokensTokenIdRoute,
  deleteApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRoute,
  deleteApiV4PersonalAccessTokensIdRoute,
  deleteApiV4PersonalAccessTokensSelfRoute,
  deleteApiV4ProjectsIdAccessTokensTokenIdRoute,
  deleteApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRoute,
  deleteApiV4UsersUserIdImpersonationTokensImpersonationTokenIdRoute,
  getApiV4GroupsIdAccessTokensRoute,
  getApiV4GroupsIdAccessTokensTokenIdRoute,
  getApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensRoute,
  getApiV4PersonalAccessTokensIdRoute,
  getApiV4PersonalAccessTokensRoute,
  getApiV4PersonalAccessTokensSelfAssociationsRoute,
  getApiV4PersonalAccessTokensSelfRoute,
  getApiV4ProjectsIdAccessTokensRoute,
  getApiV4ProjectsIdAccessTokensTokenIdRoute,
  getApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensRoute,
  getApiV4UsersUserIdImpersonationTokensImpersonationTokenIdRoute,
  getApiV4UsersUserIdImpersonationTokensRoute,
  postApiV4AdminTokenRoute,
  postApiV4GroupsIdAccessTokensRoute,
  postApiV4GroupsIdAccessTokensSelfRotateRoute,
  postApiV4GroupsIdAccessTokensTokenIdRotateRoute,
  postApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensRoute,
  postApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRotateRoute,
  postApiV4PersonalAccessTokensIdRotateRoute,
  postApiV4PersonalAccessTokensSelfRotateRoute,
  postApiV4ProjectsIdAccessTokensRoute,
  postApiV4ProjectsIdAccessTokensSelfRotateRoute,
  postApiV4ProjectsIdAccessTokensTokenIdRotateRoute,
  postApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensRoute,
  postApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRotateRoute,
  postApiV4UserPersonalAccessTokensRoute,
  postApiV4UsersUserIdImpersonationTokensRoute,
  postApiV4UsersUserIdPersonalAccessTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTokensHandler = app
  .openapi(getApiV4UsersUserIdImpersonationTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersUserIdImpersonationTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersUserIdImpersonationTokensImpersonationTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersUserIdImpersonationTokensImpersonationTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersUserIdPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdServiceAccountsUserIdPersonalAccessTokensTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAccessTokensSelfRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdAccessTokensSelfRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAccessTokensTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdAccessTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdAccessTokensTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4PersonalAccessTokensSelfRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PersonalAccessTokensSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4PersonalAccessTokensSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PersonalAccessTokensSelfAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PersonalAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4PersonalAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4PersonalAccessTokensIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AdminTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
