import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute,
  getUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute,
  postUserHierarchyGroupsInstanceIdHierarchyGroupIdNameRoute,
  putUserHierarchyGroupsInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHierarchyGroupsHandler = app
  .openapi(putUserHierarchyGroupsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserHierarchyGroupsInstanceIdHierarchyGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserHierarchyGroupsInstanceIdHierarchyGroupIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
