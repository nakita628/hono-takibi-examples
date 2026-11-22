import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UsersUserIdRoute,
  getV2UsersRoute,
  getV2UsersSelfRoute,
  getV2UsersUserIdRoute,
  postV2UsersInviteRoute,
  postV2UsersRegistrationSmsRoute,
  postV2UsersSelfMfaUnregisterRoute,
  postV2UsersSelfPasswordRoute,
  postV2UsersSelfPasswordValidateRoute,
  postV2UsersSelfUserDetailsUpdateRoute,
  postV2UsersUserIdDisableRoute,
  postV2UsersUserIdEnableRoute,
  postV2UsersUserIdMfaUnregisterRoute,
  postV2UsersUserIdRoleUpdateRoute,
  postV2UsersUserIdUnlockRoute,
  postV2UsersUserIdUserDetailsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersRegistrationSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfMfaUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfPasswordValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfUserDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdMfaUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdRoleUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdUserDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
