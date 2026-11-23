import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersRoute,
  getUsersUserIdDutyStatusRoute,
  getUsersUserIdImageRoute,
  getUsersUserIdRoute,
  getUsersUserIdSetupProgressRoute,
  postUsersUserIdCheckPermissionsRoute,
  postUsersUserIdImageRoute,
  postUsersUserIdPunchInAsManagerRoute,
  postUsersUserIdPunchInRoute,
  postUsersUserIdPunchOutRoute,
  putUsersUserIdChangePasswordRoute,
  putUsersUserIdProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCheckPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDutyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPunchInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPunchInAsManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPunchOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSetupProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
