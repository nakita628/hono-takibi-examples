import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersIDGroupsMessagesRoute,
  getUsersIDGroupsRoute,
  getUsersIDMetadataCollectionsRoute,
  getUsersIDMetadataRoute,
  getUsersIDPositionsRoute,
  getUsersIDRoute,
  getUsersIDSynergiesRoute,
  getUsersNearbyRoute,
  getUsersRoute,
  getUsersTildeRoute,
  patchUsersIDSynergiesRoute,
  patchUsersTildeRoute,
  postUsersIDMessagesRoute,
  postUsersIDMetadataRoute,
  postUsersInvitesRoute,
  postUsersMetadataFiltersRoute,
  postUsersSearchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMetadataFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersNearbyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDGroupsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIDMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDMetadataCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIDSynergiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersIDSynergiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTildeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersTildeRoute, (c) => {
    throw new Error('Not implemented')
  })
