import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
  postUsersNewRoute,
  postUsersUserIdAuthenticateRoute,
  postUsersUserIdConfigurationRoute,
  postUsersUserIdEasyPasswordRoute,
  postUsersUserIdPasswordRoute,
  postUsersUserIdPolicyRoute,
  postUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateWithQuickConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersForgotPasswordPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEasyPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
