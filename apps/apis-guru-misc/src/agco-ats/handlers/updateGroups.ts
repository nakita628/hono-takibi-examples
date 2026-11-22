import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UpdateGroupsIDRoute,
  deleteApiV2UpdateGroupsIdUsersUserIDRoute,
  getApiV2UpdateGroupsIDBundlesRoute,
  getApiV2UpdateGroupsIDRoute,
  getApiV2UpdateGroupsRoute,
  postApiV2UpdateGroupsIdUsersUserIDRoute,
  postApiV2UpdateGroupsRoute,
  putApiV2UpdateGroupsIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const updateGroupsHandler = app
  .openapi(getApiV2UpdateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UpdateGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupsIDBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UpdateGroupsIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupsIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
