import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getOauth2PermissionGrantsCountRoute,
  getOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getOauth2PermissionGrantsRoute,
  patchOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  postOauth2PermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2PermissionGrantsOAuth2PermissionGrantHandler = app
  .openapi(getOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2PermissionGrantsOAuth2PermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOauth2PermissionGrantsOAuth2PermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2PermissionGrantsOAuth2PermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2PermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
