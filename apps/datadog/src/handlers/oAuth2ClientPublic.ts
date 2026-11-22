import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2Oauth2ClientsClientUuidScopesRestrictionRoute,
  getApiV2Oauth2ClientsClientUuidScopesRestrictionRoute,
  getApiV2Oauth2WellKnownOpenidConfigurationRoute,
  getApiV2Oauth2WellKnownSitesRoute,
  postApiV2Oauth2ClientsClientUuidScopesRestrictionRoute,
  postApiV2Oauth2RegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuth2ClientPublicHandler = app
  .openapi(getApiV2Oauth2WellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2Oauth2WellKnownSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2Oauth2ClientsClientUuidScopesRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2Oauth2ClientsClientUuidScopesRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2Oauth2ClientsClientUuidScopesRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2Oauth2RegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
