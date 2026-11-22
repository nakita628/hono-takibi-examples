import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeOauth2PermissionGrantsCountRoute,
  getMeOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getMeOauth2PermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOAuth2PermissionGrantHandler = app
  .openapi(getMeOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOauth2PermissionGrantsOAuth2PermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOauth2PermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
