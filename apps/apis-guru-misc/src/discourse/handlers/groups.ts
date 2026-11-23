import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIdMembersJsonRoute,
  getGroupsIdJsonRoute,
  getGroupsIdMembersJsonRoute,
  putGroupsIdJsonRoute,
  putGroupsIdMembersJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
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
