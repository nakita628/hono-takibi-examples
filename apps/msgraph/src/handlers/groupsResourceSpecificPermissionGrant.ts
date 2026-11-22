import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getGroupsGroupIdPermissionGrantsCountRoute,
  getGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  getGroupsGroupIdPermissionGrantsRoute,
  patchGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdRoute,
  postGroupsGroupIdPermissionGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsResourceSpecificPermissionGrantHandler = app
  .openapi(getGroupsGroupIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdPermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdPermissionGrantsResourceSpecificPermissionGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPermissionGrantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
