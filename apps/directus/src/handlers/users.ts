import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdRoute,
  deleteUsersRoute,
  getUsersIdRoute,
  getUsersMeRoute,
  getUsersRegisterVerifyEmailRoute,
  getUsersRoute,
  patchUsersIdRoute,
  patchUsersMeRoute,
  patchUsersMeTrackPageRoute,
  patchUsersRoute,
  postUsersIdTfaDisableRoute,
  postUsersInviteAcceptRoute,
  postUsersInviteRoute,
  postUsersMeTfaDisableRoute,
  postUsersMeTfaEnableRoute,
  postUsersMeTfaGenerateRoute,
  postUsersRegisterRoute,
  postUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdTfaDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInviteAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeTfaDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeTfaEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeTfaGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeTrackPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRegisterVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
