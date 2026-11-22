import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAssistantsAssistantIdRoute,
  deleteUsersUserIdAssistantsRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdSchedulersRoute,
  deleteUsersUserIdSchedulersSchedulerIdRoute,
  deleteUsersUserIdSettingsVirtualBackgroundsRoute,
  deleteUsersUserIdTokenRoute,
  getUsersEmailRoute,
  getUsersMeZakRoute,
  getUsersRoute,
  getUsersUserIdAssistantsRoute,
  getUsersUserIdPermissionsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSchedulersRoute,
  getUsersUserIdSettingsRoute,
  getUsersUserIdTokenRoute,
  getUsersVanityNameRoute,
  patchUsersUserIdRoute,
  patchUsersUserIdSettingsRoute,
  postUsersRoute,
  postUsersUserIdAssistantsRoute,
  postUsersUserIdPictureRoute,
  postUsersUserIdSettingsVirtualBackgroundsRoute,
  putAccountsAccountIdUsersUserIdAccountRoute,
  putUsersUserIdEmailRoute,
  putUsersUserIdPasswordRoute,
  putUsersUserIdPresenceStatusRoute,
  putUsersUserIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(putAccountsAccountIdUsersUserIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeZakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersVanityNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPictureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPresenceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSchedulersSchedulerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
