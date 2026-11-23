import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersAllProgressRoute,
  getUsersUserEmailBadgesRoute,
  getUsersUserEmailOfferingsOfferingIdProgressRoute,
  getUsersUserEmailOfferingsRoute,
  getUsersUserEmailProgressRoute,
  getUsersUserEmailRoute,
  patchUsersUserEmailRoute,
  patchUsersUserEmailTransferRoute,
  postUsersRoute,
  postUsersUserEmailInviteEmailRoute,
  postUsersUserEmailOfferingsRoute,
  postUsersUserEmailPermissionsPermissionNameRoute,
  putUsersUserEmailSuspendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersAllProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailBadgesRoute, (c) => {
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
  .openapi(getUsersUserEmailOfferingsOfferingIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserEmailPermissionsPermissionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserEmailSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserEmailTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
