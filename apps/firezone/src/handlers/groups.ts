import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIdRoute,
  getGroupsGroupIdMembershipsRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  patchGroupsGroupIdMembershipsRoute,
  patchGroupsIdRoute,
  postGroupsRoute,
  putGroupsGroupIdMembershipsRoute,
  putGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
