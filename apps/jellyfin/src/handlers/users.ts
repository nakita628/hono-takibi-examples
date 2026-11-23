import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  postUsersAuthenticateByNameRoute,
  postUsersAuthenticateWithQuickConnectRoute,
  postUsersConfigurationRoute,
  postUsersForgotPasswordPinRoute,
  postUsersForgotPasswordRoute,
  postUsersNewRoute,
  postUsersPasswordRoute,
  postUsersRoute,
  postUsersUserIdPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateByNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAuthenticateWithQuickConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersConfigurationRoute, (c) => {
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
  .openapi(postUsersPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
