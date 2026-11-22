import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminGroupsIdJsonRoute,
  deleteGroupsIdMembersJsonRoute,
  getGroupsByIdIdJsonRoute,
  getGroupsJsonRoute,
  getGroupsNameJsonRoute,
  getGroupsNameMembersJsonRoute,
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
  .openapi(getGroupsNameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsByIdIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsNameMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
