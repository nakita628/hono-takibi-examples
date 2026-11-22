import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4GroupsGroupIdRoute,
  deleteV4GroupsGroupIdUsersRoute,
  getV4GroupsGroupIdLastAdminRoomsRoute,
  getV4GroupsGroupIdRolesRoute,
  getV4GroupsGroupIdRoomsRoute,
  getV4GroupsGroupIdRoute,
  getV4GroupsGroupIdUsersRoute,
  getV4GroupsRoute,
  postV4GroupsGroupIdUsersRoute,
  postV4GroupsRoute,
  putV4GroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getV4GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdLastAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
