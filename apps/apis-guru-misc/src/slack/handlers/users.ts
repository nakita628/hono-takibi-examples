import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersConversationsRoute,
  getUsersGetPresenceRoute,
  getUsersIdentityRoute,
  getUsersInfoRoute,
  getUsersListRoute,
  getUsersLookupByEmailRoute,
  postUsersDeletePhotoRoute,
  postUsersSetActiveRoute,
  postUsersSetPhotoRoute,
  postUsersSetPresenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeletePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersGetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersLookupByEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSetActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSetPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
