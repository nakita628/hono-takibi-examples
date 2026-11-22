import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserManagementUsersUserlandUserIdAuthFactorsRoute,
  postUserManagementUsersUserlandUserIdAuthFactorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementMultiFactorAuthenticationHandler = app
  .openapi(postUserManagementUsersUserlandUserIdAuthFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserlandUserIdAuthFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
