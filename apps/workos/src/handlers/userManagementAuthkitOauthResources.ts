import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementAuthkitOauthResourcesIdRoute,
  getUserManagementAuthkitOauthResourcesRoute,
  postUserManagementAuthkitOauthResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementAuthkitOauthResourcesHandler = app
  .openapi(postUserManagementAuthkitOauthResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementAuthkitOauthResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementAuthkitOauthResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
