import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute,
  getUsersUserIdOauth2PermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOAuth2PermissionGrantHandler = app
  .openapi(getUsersUserIdOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOauth2PermissionGrantsOAuth2PermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
