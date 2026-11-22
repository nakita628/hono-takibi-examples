import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminCustomProvidersIdentifierRoute,
  deleteAdminOauthClientsClientIdRoute,
  deleteAdminSsoProvidersSsoProviderIdRoute,
  deleteAdminUsersUserIdFactorsFactorIdRoute,
  deleteAdminUsersUserIdRoute,
  getAdminAuditRoute,
  getAdminCustomProvidersIdentifierRoute,
  getAdminCustomProvidersRoute,
  getAdminOauthClientsClientIdRoute,
  getAdminOauthClientsRoute,
  getAdminSsoProvidersRoute,
  getAdminSsoProvidersSsoProviderIdRoute,
  getAdminUsersRoute,
  getAdminUsersUserIdFactorsRoute,
  getAdminUsersUserIdRoute,
  postAdminCustomProvidersRoute,
  postAdminGenerateLinkRoute,
  postAdminOauthClientsClientIdRegenerateSecretRoute,
  postAdminOauthClientsRoute,
  postAdminSsoProvidersRoute,
  postInviteRoute,
  putAdminCustomProvidersIdentifierRoute,
  putAdminOauthClientsClientIdRoute,
  putAdminSsoProvidersSsoProviderIdRoute,
  putAdminUsersUserIdFactorsFactorIdRoute,
  putAdminUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(postInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminGenerateLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersUserIdFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdFactorsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUserIdFactorsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSsoProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSsoProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSsoProvidersSsoProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminSsoProvidersSsoProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSsoProvidersSsoProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOauthClientsClientIdRegenerateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomProvidersIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminCustomProvidersIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomProvidersIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
