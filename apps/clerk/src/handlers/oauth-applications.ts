import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauthApplicationsOauthApplicationIdRoute,
  getOauthApplicationsOauthApplicationIdRoute,
  getOauthApplicationsRoute,
  patchOauthApplicationsOauthApplicationIdRoute,
  postOauthApplicationsAccessTokensVerifyRoute,
  postOauthApplicationsOauthApplicationIdRevokeTokenRoute,
  postOauthApplicationsOauthApplicationIdRotateSecretRoute,
  postOauthApplicationsRoute,
  putOauthApplicationsOauthApplicationIdLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthApplicationsHandler = app
  .openapi(getOauthApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthApplicationsOauthApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOauthApplicationsOauthApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauthApplicationsOauthApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOauthApplicationsOauthApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthApplicationsOauthApplicationIdRotateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthApplicationsOauthApplicationIdRevokeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthApplicationsAccessTokensVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
