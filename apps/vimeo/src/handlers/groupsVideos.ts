import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdVideosVideoIdRoute,
  getGroupsGroupIdVideosRoute,
  getGroupsGroupIdVideosVideoIdRoute,
  putGroupsGroupIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsVideosHandler = app
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
