import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauthApplicationsOauthApplicationIdRoute,
  getOauthApplicationsOauthApplicationIdRoute,
  getOauthApplicationsRoute,
  patchOauthApplicationsOauthApplicationIdRoute,
  postOauthApplicationsOauthApplicationIdRevokeTokenRoute,
  postOauthApplicationsOauthApplicationIdRotateSecretRoute,
  postOauthApplicationsRoute,
  putOauthApplicationsOauthApplicationIdLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthApplicationsHandler = app
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
