import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminGroupsIdJsonRoute,
  deleteGroupsIdMembersJsonRoute,
  getGroupsIdJsonRoute,
  getGroupsIdMembersJsonRoute,
  getGroupsJsonRoute,
  postAdminGroupsJsonRoute,
  putGroupsIdJsonRoute,
  putGroupsIdMembersJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(postAdminGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
