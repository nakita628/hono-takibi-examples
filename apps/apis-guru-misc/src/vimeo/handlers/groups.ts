import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdRoute,
  deleteGroupsGroupIdVideosVideoIdRoute,
  getGroupsGroupIdRoute,
  getGroupsGroupIdUsersRoute,
  getGroupsGroupIdVideosRoute,
  getGroupsGroupIdVideosVideoIdRoute,
  getGroupsRoute,
  postGroupsRoute,
  putGroupsGroupIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
