import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAssistantsAssistantIdRoute,
  deleteUsersUserIdAssistantsRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdSchedulersRoute,
  deleteUsersUserIdSchedulersSchedulerIdRoute,
  deleteUsersUserIdSettingsVirtualBackgroundsRoute,
  deleteUsersUserIdTokenRoute,
  deleteUsersUserIdTspTspIdRoute,
  getUsersEmailRoute,
  getUsersMeZakRoute,
  getUsersRoute,
  getUsersUserIdAssistantsRoute,
  getUsersUserIdMeetingsRoute,
  getUsersUserIdMeetingTemplatesRoute,
  getUsersUserIdPacRoute,
  getUsersUserIdPermissionsRoute,
  getUsersUserIdRecordingsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSchedulersRoute,
  getUsersUserIdSettingsRoute,
  getUsersUserIdTokenRoute,
  getUsersUserIdTspRoute,
  getUsersUserIdTspTspIdRoute,
  getUsersUserIdWebinarsRoute,
  getUsersUserIdWebinarTemplatesRoute,
  getUsersVanityNameRoute,
  patchUsersUserIdRoute,
  patchUsersUserIdSettingsRoute,
  patchUsersUserIdTspSettingsRoute,
  patchUsersUserIdTspTspIdRoute,
  postUsersRoute,
  postUsersUserIdAssistantsRoute,
  postUsersUserIdMeetingsRoute,
  postUsersUserIdPictureRoute,
  postUsersUserIdSettingsVirtualBackgroundsRoute,
  postUsersUserIdTspRoute,
  postUsersUserIdWebinarsRoute,
  putUsersUserIdEmailRoute,
  putUsersUserIdPasswordRoute,
  putUsersUserIdPresenceStatusRoute,
  putUsersUserIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
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
  .openapi(getUsersUserIdMeetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPacRoute, (c) => {
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
  .openapi(getUsersUserIdRecordingsRoute, (c) => {
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
  .openapi(getUsersUserIdTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTspSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTspTspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTspTspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTspTspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWebinarTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
