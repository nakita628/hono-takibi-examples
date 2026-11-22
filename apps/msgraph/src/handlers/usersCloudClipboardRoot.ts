import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCloudClipboardItemsCloudClipboardItemIdRoute,
  deleteUsersUserIdCloudClipboardRoute,
  getUsersUserIdCloudClipboardItemsCloudClipboardItemIdRoute,
  getUsersUserIdCloudClipboardItemsCountRoute,
  getUsersUserIdCloudClipboardItemsRoute,
  getUsersUserIdCloudClipboardRoute,
  patchUsersUserIdCloudClipboardItemsCloudClipboardItemIdRoute,
  patchUsersUserIdCloudClipboardRoute,
  postUsersUserIdCloudClipboardItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersCloudClipboardRootHandler = app
  .openapi(getUsersUserIdCloudClipboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCloudClipboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCloudClipboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCloudClipboardItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudClipboardItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCloudClipboardItemsCloudClipboardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCloudClipboardItemsCloudClipboardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCloudClipboardItemsCloudClipboardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCloudClipboardItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
