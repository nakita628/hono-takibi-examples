import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ListsIdMembersUserIdRoute,
  delete2ListsIdRoute,
  delete2UsersIdFollowedListsListIdRoute,
  delete2UsersIdPinnedListsListIdRoute,
  get2ListsIdRoute,
  get2UsersIdFollowedListsRoute,
  get2UsersIdListMembershipsRoute,
  get2UsersIdOwnedListsRoute,
  get2UsersIdPinnedListsRoute,
  post2ListsIdMembersRoute,
  post2ListsRoute,
  post2UsersIdFollowedListsRoute,
  post2UsersIdPinnedListsRoute,
  put2ListsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(post2ListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ListsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ListsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdFollowedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdFollowedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdFollowedListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdListMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdOwnedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdPinnedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdPinnedListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdPinnedListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
