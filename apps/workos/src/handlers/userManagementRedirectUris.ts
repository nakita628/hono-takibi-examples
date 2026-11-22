import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementRedirectUrisIdRoute,
  getUserManagementRedirectUrisRoute,
  postUserManagementRedirectUrisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementRedirectUrisHandler = app
  .openapi(postUserManagementRedirectUrisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementRedirectUrisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementRedirectUrisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
