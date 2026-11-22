import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdPresenceRoute,
  getUsersUserIdPresenceRoute,
  patchUsersUserIdPresenceRoute,
  postUsersUserIdPresenceClearAutomaticLocationRoute,
  postUsersUserIdPresenceClearLocationRoute,
  postUsersUserIdPresenceClearPresenceRoute,
  postUsersUserIdPresenceClearUserPreferredPresenceRoute,
  postUsersUserIdPresenceSetAutomaticLocationRoute,
  postUsersUserIdPresenceSetManualLocationRoute,
  postUsersUserIdPresenceSetPresenceRoute,
  postUsersUserIdPresenceSetStatusMessageRoute,
  postUsersUserIdPresenceSetUserPreferredPresenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersPresenceHandler = app
  .openapi(getUsersUserIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceClearAutomaticLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceClearLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceClearPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceClearUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceSetAutomaticLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceSetManualLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceSetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceSetStatusMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPresenceSetUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
