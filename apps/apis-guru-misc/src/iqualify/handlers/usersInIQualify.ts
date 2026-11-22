import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserEmailOfferingsRoute,
  getUsersUserEmailRoute,
  patchUsersUserEmailRoute,
  postUsersRoute,
  postUsersUserEmailInviteEmailRoute,
  postUsersUserEmailOfferingsRoute,
  postUsersUserEmailPermissionsPermissionNameRoute,
  putUsersUserEmailSuspendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersInIQualifyHandler = app
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserEmailInviteEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserEmailOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserEmailPermissionsPermissionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserEmailSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
