import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminClientsIdRoute,
  deleteAdminClientsIdSecretsRotateRoute,
  deleteAdminOauth2AuthSessionsConsentRoute,
  deleteAdminOauth2AuthSessionsLoginRoute,
  deleteAdminOauth2TokensRoute,
  deleteAdminTrustGrantsJwtBearerIssuersIdRoute,
  getAdminClientsIdRoute,
  getAdminClientsRoute,
  getAdminOauth2AuthRequestsConsentRoute,
  getAdminOauth2AuthRequestsLoginRoute,
  getAdminOauth2AuthRequestsLogoutRoute,
  getAdminOauth2AuthSessionsConsentRoute,
  getAdminTrustGrantsJwtBearerIssuersIdRoute,
  getAdminTrustGrantsJwtBearerIssuersRoute,
  getOauth2AuthRoute,
  getOauth2DeviceVerifyRoute,
  patchAdminClientsIdRoute,
  postAdminClientsIdSecretsRotateRoute,
  postAdminClientsRoute,
  postAdminOauth2IntrospectRoute,
  postAdminTrustGrantsJwtBearerIssuersRoute,
  postOauth2DeviceAuthRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRoute,
  putAdminClientsIdLifespansRoute,
  putAdminClientsIdRoute,
  putAdminOauth2AuthRequestsConsentAcceptRoute,
  putAdminOauth2AuthRequestsConsentRejectRoute,
  putAdminOauth2AuthRequestsDeviceAcceptRoute,
  putAdminOauth2AuthRequestsLoginAcceptRoute,
  putAdminOauth2AuthRequestsLoginRejectRoute,
  putAdminOauth2AuthRequestsLogoutAcceptRoute,
  putAdminOauth2AuthRequestsLogoutRejectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuth2Handler = app
  .openapi(getAdminClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminClientsIdLifespansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClientsIdSecretsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClientsIdSecretsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOauth2AuthRequestsConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsConsentAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsConsentRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsDeviceAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOauth2AuthRequestsLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsLoginAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsLoginRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOauth2AuthRequestsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsLogoutAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOauth2AuthRequestsLogoutRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOauth2AuthSessionsConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOauth2AuthSessionsConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOauth2AuthSessionsLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOauth2IntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOauth2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTrustGrantsJwtBearerIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTrustGrantsJwtBearerIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTrustGrantsJwtBearerIssuersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTrustGrantsJwtBearerIssuersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2AuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2DeviceAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2DeviceVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2RevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
