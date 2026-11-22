import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeOauthAuthRequestsConsentRoute,
  getAppidAppIdRecipeOauthAuthRequestsLoginRoute,
  getAppidAppIdRecipeOauthAuthRoute,
  getAppidAppIdRecipeOauthClientsListRoute,
  getAppidAppIdRecipeOauthClientsRoute,
  getAppidAppIdRecipeOauthSessionsLogoutRoute,
  postAppidAppIdRecipeOauthClientsRemoveRoute,
  postAppidAppIdRecipeOauthClientsRoute,
  postAppidAppIdRecipeOauthIntrospectRoute,
  postAppidAppIdRecipeOauthSessionRevokeRoute,
  postAppidAppIdRecipeOauthTokenRevokeRoute,
  postAppidAppIdRecipeOauthTokenRoute,
  postAppidAppIdRecipeOauthTokensRevokeRoute,
  putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute,
  putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute,
  putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute,
  putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute,
  putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute,
  putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute,
  putAppidAppIdRecipeOauthClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuth2ProviderRecipeHandler = app
  .openapi(getAppidAppIdRecipeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthClientsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthClientsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthAuthRequestsConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthAuthRequestsLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthSessionRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthTokenRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthTokensRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthSessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
